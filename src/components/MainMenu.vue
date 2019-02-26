<template>
  <div class="navbar is-primary">
    <div class="navbar-brand">
      <strong class="navbar-item"> Пожалуйста, выберите категорию</strong>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link
          class="navbar-item"
          to="/pizzas"
        >Пиццы</router-link>
        <router-link
          class="navbar-item"
          to="/combo"
        >Комбо</router-link>
        <router-link
          class="navbar-item"
          to="/drink"
        >Напитки</router-link>
        <router-link
          class="navbar-item"
          to="/dessert"
        >Десерты</router-link>
      </div>
      <div class="navbar-end">
        <div
          class="navbar-item"
          v-if="hasProduct()"
        >
          В корзине {{totalItem}} продукта(ов)
        </div>
        <div class="navbar-item">
          <router-link
            to="/cart"
            class="button is-primary is-inverted"
          ><span> Корзина</span>
            <span class="icon">
              <i class="fas fa-shopping-cart"></i>
            </span>
          </router-link>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  methods: {
    hasProduct () {
      return this.getProductsInCart.length > 0;
    }
  },
  computed: {
    ...mapGetters(['getProductsInCart']),
    totalItem () {
      return this.getProductsInCart.reduce((total, next) =>
        total + next.quantity, 0);
    }
  }
}
</script>

<style scoped>
.is-vertical-center {
  display: flex;
  align-items: center;
}
.cart-circle {
  border: 1px solid red;
}
</style>
