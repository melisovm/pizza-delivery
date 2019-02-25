<template>
  <div class="main">

    <div>
      <ul>
        <li
          v-for="(product, index) in getProductsInCart"
          :key="index"
        >
          <div class="panel-block navbar">
            <div class="navbar-brand">
              <div class="navbar-item">
                <img
                  :src="product.image"
                  alt=""
                >
              </div>
            </div>
            <div class="navbar-item">
              <h3> {{product.name}}</h3>
            </div>
            <div class="navbar-end">
              <a
                class="button is-rounded is-primary is-inverted"
                @click="remove(index)"
              ><i class="fas fa-times"></i></a>
            </div>
          </div>
        </li>
      </ul>
      <a
        class="button is-primary button-clear"
        @click="clear()"
      >Очистить корзину</a>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getProductsInCart']),
  },
  methods: {
    ...mapActions(['removeProduct',
      'clearCart']),
    remove (index) {
      this.removeProduct(index);
    },
    clear () {
      this.clearCart();
    }

  }
}
</script>

<style scoped>
.main {
  margin: 2em;
}
.panel-block {
  /* margin-bottom: 0.1%; */
  border-radius: 0.3em;
}
.button-clear {
  margin-top: 1em;
  float: right;
}
</style>
