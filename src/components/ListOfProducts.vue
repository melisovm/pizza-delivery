<template>
  <div class="container">
    <div class="columns is-full">
      <div class="column">
        <ul class="cards">
          <li
            v-for="(product, index) in products"
            :key="index"
            class="product"
          >
            <div class="card card-equal-height">
              <div class="card-image">
                <figure class="image is-4by1">
                  <img
                    class="card-image"
                    :src="product.image"
                  >
                  <div>
                    <!-- if didnt work this path,the change to src="../../assets/halal.jpeg" -->
                    <img
                      class="image-halal"
                      src="src/assets/halal.jpeg"
                      v-if="product.halal"
                    >
                    <!-- if didnt work this path,the change to src="../../assets/new.png" -->
                    <img
                      class="image-new"
                      src="src/assets/new.png"
                      v-if="showNew(product.date)"
                    ></div>
                </figure>
              </div>
              <div class="card-content">
                <p class="title has-text-centered">{{product.name}}</p>
                <div class="content">

                  <p>{{product.description}}</p>
                </div>
              </div>
              <div class="card-footer">
                <p class="card-footer-item">
                  <a
                    class="button is-primary is-full"
                    @click="addProductToCart(product)"
                  >Добавить в корзину</a>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
var moment = require('moment');

export default {
  data () {
    return {
      dateToFilter: Date.now()
    }
  }, filters: {
    changeDateFilter (value) {

    }
  },
  props: ['products'],
  computed: {
    ...mapGetters(['getProductsInCart']),
  },
  methods: {
    ...mapActions([
      'addProduct',
      'currentProduct',
    ]),
    showNew (value) {
      let duration = moment(Date.now()).diff(moment(value, "DD.MY.YYYY"));
      if (duration <= 2592000000) {
        return true
      }
      else {
        return false
      }
    },
    //adding products to Cart.
    addProductToCart (product) {
      this.addProduct(product);
    },
    //adding to current product.
    //will use when application will have more functions
    addCurrentProduct (product) {
      this.currentProduct(product);
    }
  }
}
</script>

<style scoped>
.card-equal-height {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.card-equal-height .card-footer {
  margin-top: auto;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  margin: 2rem;
}
.is-full {
  width: 100%;
}
.card img.card-image {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  box-shadow: 0 7px 6px -2px rgba(0, 0, 0, 0.19);
}
.image-halal {
  position: absolute;
  top: 0.5rem;
  max-width: 3em;
  right: 0.5rem;
  border-radius: 80%;
}
.image-new {
  position: absolute;
  max-width: 4em;
  top: 0;
  left: 0;
}

/* Responsiveness */
/* smartphones */
@media screen and (max-width: 620px) {
  .cards {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    margin: 2rem;
  }
}
/* Tablets */
@media screen and (min-width: 621px) and (max-width: 768px) {
  .cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }
}
/* small laptops and big tablets */
@media screen and (min-width: 769px) and (max-width: 1170px) {
  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }
}
/* laptops */
@media screen and (min-width: 1171px) {
  .container {
    margin-left: 3rem;
  }
}
</style>
