<template>
  <div class="container">

    <div class="columns is-full">
      <div class="column">
        <ul class="cards">
          <li
            v-for="(product, index) in getCategoryProducts(this.$route.params.category)"
            :key="index"
            class="product"
          >
            <div class="card card-equal-height">
              <div class="card-image">
                <figure class="image is-4by1">
                  <img
                    class="card-image"
                    :src="getImageUrl(product.image)"
                  >
                  <div>
                    <!-- if didnt work this path,the change to src="../../assets/halal.jpeg" -->
                    <img
                      class="image-halal"
                      src="/src/assets/halal.jpeg"
                      v-if="product.halalStatus"
                    >
                    <!-- if didnt work this path,the change to src="../../assets/new.png" -->
                    <img
                      class="image-new"
                      src="/src/assets/new.png"
                      v-if="showNew(product.created_at)"
                    ></div>
                </figure>
              </div>
              <div class="card-content">
                <p class="title has-text-centered">{{product.name}}</p>
                <p
                  class="subtitle"
                  style="font-size:0.7rem;color:grey;"
                >{{product.price}} сом</p>
                <div class="content">

                  <p>{{product.description}}</p>
                </div>
              </div>
              <div class="card-footer">
                <p class="card-footer-item">
                  <a
                    class="button is-primary is-full"
                    @click="addProductToCart(product);"
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
import { mapActions, mapGetters, mapState } from 'vuex';
import Vue from 'vue';
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueNotifications from 'vue-notifications'
//For date
var moment = require('moment');

Vue.use(Buefy)

export default {
  data () {
    return {
      dateToFilter: Date.now(),

    }
  },
  computed: {
    ...mapState(['defaultUrl']),
    ...mapGetters(['getCategoryProducts']),
    category () {
      let category = this.$route.params.category
    }
  },
  filters: {
    changeDateFilter (value) {

    }
  },
  props: ['products'],
  methods: {
    ...mapActions([
      'addProduct',
      'currentProduct',
    ]),
    showNew (value) {
      // Delete when project is added admin and client side ==>"DD.MY.YYYY"
      let duration = moment(Date.now()).diff(moment(value));
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
      this.$toast.open({
        message: 'Продукт добавлен! ',
        duration: 1000,
        position: 'is-top',
        type: 'is-success'
      });
    },
    getImageUrl (ImageName) {
      return this.defaultUrl + '/image/' + ImageName;
    },
    //adding to current product.
    //will use when application will have more functions
    addCurrentProduct (product) {
      this.currentProduct(product);
    }
  },
  mounted () {
    let category = this.$route.params.category
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
  border-radius: 0.5rem;
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
  .container {
    margin: 0 auto;
  }
}
/* laptops */
@media screen and (min-width: 1171px) {
  .container {
    margin: 0 auto;
  }
}
</style>
