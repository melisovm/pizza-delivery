<template>

  <ul class="cards">
    <li
      v-for="(product, index) in products"
      :key="index"
      class="product"
    >
      <div class="card card-equal-height">
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
                class="title is-6"
                @click="addCurrentProduct(product)"
              >{{product.name}}

              </p>
              <p class="subtitle is-7">Цена: {{product.price}} сом</p>
            </div>
          </div>
          <div class="content">
            {{product.description}}
            <br>
          </div>
          <div class="card-footer">
            <button
              class="button is-primary"
              @click="addProductToCart(product)"
            >Добавить в корзину</button>
          </div>
        </div>
      </div>
    </li>

  </ul>
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
.cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  margin: 4em 1em 1em 4em;
  grid-auto-rows: 1fr;
}
.card {
  margin: 1em;
}
</style>
