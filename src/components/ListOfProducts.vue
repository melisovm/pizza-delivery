<template>
  <!-- <div class="card card-equal-height">
        <div class="card-image">
          <figure class="image is-4by2">
            <img
              :src="product.image"
              alt="Placeholder image"
            >
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p
                class="title is-1"
                @click="addCurrentProduct(product)"
              >{{product.name}}

              </p>
              <p class="subtitle is-4">Цена: {{product.price}} сом</p>
            </div>
          </div>
          <div class="content is-size-3">
            <div v-if="product.description < 64"> {{product.description}}</div>
            <div v-if="product.description >= 64">{{product.description.substring(0,63)+"..."}}</div>
            <br>
          </div>
          <button
            class="button is-primary is-right"
            @click="addProductToCart(product)"
          >Добавить в корзину</button>
        </div>
      </div> -->
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
                  <!-- here add image. -->
                  <img
                    class="card-image"
                    :src="product.image"
                  ></figure>
              </div>
              <div class="card-content">
                <p class="title has-text-centered">{{product.name}} </p>
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

export default {
  props: ['products'],
  computed: {
    ...mapGetters(['getProductsInCart']),
  },
  methods: {
    ...mapActions([
      'addProduct',
      'currentProduct',
    ]),
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
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
  margin: 2rem;
}
.is-full {
  width: 100%;
}
.card img {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  box-shadow: 0 7px 6px -2px rgba(0, 0, 0, 0.19);
}
</style>
