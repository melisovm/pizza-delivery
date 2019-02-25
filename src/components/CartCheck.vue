<template>
  <div class="main">
    <div v-if="hasProduct()">
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
    <div
      v-else
      class="no-item"
    >
      <i class="far fa-frown fa-5x"></i>
      <div class="no-item-text">
        У Вас нету добавленного продукта
      </div>
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
    }, hasProduct () {
      return this.getProductsInCart.length > 0;
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
.no-item {
  text-align: center;
  font-size: 2em;
  color: gray;
  margin-top: 5em;
}
.no-item-text {
  margin-top: 2em;
}
.far {
  color: #fff;
}
</style>
