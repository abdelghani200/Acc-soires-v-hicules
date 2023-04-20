<template>
  <section class="h-100 h-custom" style="background-color: #eee;margin-top: 160px;">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
          <div class="card">
            <div class="card-body p-4">

              <div class="row">

                <div class="col-lg-7">
                  <h5 class="mb-3"><a href="#!" class="text-body"><i class="fas fa-long-arrow-alt-left me-2"></i>Continue
                      shopping</a></h5>
                  <hr>

                  <div class="d-flex justify-content-between align-items-center mb-4">
                    <div>
                      <p class="mb-1">Shopping cart</p>
                      <p class="mb-0">You have {{cartItems.length}} items in your
                        cart</p>
                    </div>
                    <div>
                      <p class="mb-0"><span class="text-muted">Sort by:</span> <a href="#!" class="text-body">price <i
                            class="fas fa-angle-down mt-1"></i></a></p>
                    </div>
                  </div>

                  <div v-for="(item, index) in cartItems" :key="index" class="card mb-3">
                    <div class="card-body">
                      <div class="d-flex justify-content-between">
                        <div class="d-flex flex-row align-items-center">
                          <div>
                            <img :src="item.image" class="img-fluid rounded-3" alt="Shopping item" style="width: 65px;">
                          </div>
                          <div class="ms-3">
                            <h5>{{ item.name }}</h5>
                          </div>
                        </div>
                        <div style="width: 50px;">
                          <input type="number" min="1" max="10" v-model="item.quantity" @change="updateQuantity(item)">
                        </div>
                        <div class="d-flex flex-row align-items-center">
                          <div style="width: 80px;">
                            <h5 class="mb-0">{{ item.quantity * item.price }}</h5>
                          </div>
                          <a href="#!" style="color: #cecece;" @click="removeItem(item.id)"><i
                              class="fas fa-trash-alt"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-5">

                  <div class="card bg-primary text-white rounded-3">
                    <div class="card-body">


                      <form class="mt-4">
                        <div class="form-outline form-white mb-4">
                          <input type="text" id="typeName" class="form-control form-control-lg" siez="17"
                            placeholder="Cardholder's Name" />
                          <label class="form-label" for="typeName">Cardholder's Name</label>
                        </div>

                        <div class="form-outline form-white mb-4">
                          <input type="text" id="typeText" class="form-control form-control-lg" siez="17"
                            placeholder="1234 5678 9012 3457" minlength="19" maxlength="19" />
                          <label class="form-label" for="typeText">Card Number</label>
                        </div>

                        <div class="row mb-4">
                          <div class="col-md-6">
                            <div class="form-outline form-white">
                              <input type="text" id="typeExp" class="form-control form-control-lg" placeholder="MM/YYYY"
                                size="7" minlength="7" maxlength="7" />
                              <label class="form-label" for="typeExp">Expiration</label>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-outline form-white">
                              <input type="password" id="typeText" class="form-control form-control-lg"
                                placeholder="&#9679;&#9679;&#9679;" size="1" minlength="3" maxlength="3" />
                              <label class="form-label" for="typeText">Cvv</label>
                            </div>
                          </div>
                        </div>

                      </form>

                      <hr class="my-4">

                      <div class="d-flex justify-content-between">
                        <p class="mb-2">Subtotal</p>
                        <p class="mb-2">${{ subtotal }}</p>
                      </div>

                      <div class="d-flex justify-content-between">
                        <p class="mb-2">Shipping</p>
                        <p class="mb-2">${{ shipping }}</p>
                      </div>

                      <div class="d-flex justify-content-between mb-4">
                        <p class="mb-2">Total(Incl. taxes)</p>
                        <p class="mb-2">${{ getTotal() }}</p>
                      </div>

                      <button type="button" class="btn btn-info btn-block btn-lg">
                        <div class="d-flex justify-content-between">
                          <span>${{ getTotal() }}</span>
                          <span @click.prevent="checkout">Checkout <i class="fas fa-long-arrow-alt-right ms-2"></i></span>
                        </div>
                      </button>

                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



<script>

import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  name: "Cart",


  data() {
    return {
      cartItems: [],
      subtotal: 0,
      shipping: 0,
      total: this.subtotal,

    }
  },

  methods: {
    async getCart() {
      try {
        const response = await axios.get('api/cart', {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('access_token')
          }
        })
        this.cartItems = response.data.data
        // console.log(1);
        console.log(this.cartItems);
        console.log(response);
      } catch (error) {
        console.log(error)
      }
    },
    updateQuantity(item) {
      // Envoyer une requête PUT à l'API pour mettre à jour la quantité du produit
      axios.put(`/api/cart/${item.id}`, { quantity: item.quantity })
        .then(response => {
          // Afficher un message de succès
          console.log(response.data.message);
        })
        .catch(error => {
          // Afficher un message d'erreur
          console.error(error.response.data.message);
        });
    },
    removeItem(item) {
      // Envoyer une requête DELETE à l'API pour supprimer le produit du panier
      axios.delete(`api/cart/${item}`)
        .then(response => {
          // Afficher un message de succès
          console.log(response.data.message);
          // Mettre à jour la liste des produits du panier
          this.getCart();
        })
        .catch(error => {
          // Afficher un message d'erreur
          console.error(error.response.data.message);
        });
    },

    computeTotals() {
      let subtotal = 0;
      this.cartItems.forEach((item) => {
        subtotal += item.price * item.quantity;
      });
      console.log(subtotal);
      this.subtotal = subtotal;
      console.log(1);
      console.log(this.subtotal);
      this.shipping = 10; // Assuming a fixed shipping cost of $10
      this.total = this.subtotal + this.shipping;
      console.log(this.total);
    },

    getTotal() {
      let total = 0;
      for (let i = 0; i < this.cartItems.length; i++) {
        total += this.cartItems[i].price * this.cartItems[i].quantity;
      }
      return total;
    },


    checkout() {
    // Vider la table carts
    axios.delete('api/cart', {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
      }
    })
      .then(response => {
        console.log('Carts table cleared')
        console.log(this.cartItems)
      })
      .catch(error => {
        console.error(error)
      })

    // Ajouter la commande à la table orders

      const userId = localStorage.getItem('user_id');
      console.log('CArtgbsdfv');
      console.log(this.cartItems);
      
      console.log(this.cartItems);
      const total = this.getTotal();
      const statut = "pending";

      const order = {
        user_id: userId,
        //  "items" : items,

        items: this.cartItems.map(item => {
          return {
            product_id: item.id,
            quantite: item.quantity
          }
        }),

        total: total,
        statut: statut
      };

      // console.log(JSON.stringify(order));

      axios.post('/api/orders', JSON.stringify(order), {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          console.log(order);
          console.log('Order created')
          // console.log(cartItems)
        })
        .catch(error => {
          console.error(error)
        });

      // Afficher une alerte de succès
      Swal.fire({
        title: 'Commande réussie!',
        icon: 'success',
        confirmButtonText: 'OK',
      });
    }


  },
  computed: {
    subtotal() {
      let total = 0;
      this.cartItems.forEach(item => {
        total += item.price * item.quantity;
      });
      return total;
    }
  },

  mounted() {
    this.getCart()
    this.computeTotals()
    this.getTotal()

  }



}


</script>