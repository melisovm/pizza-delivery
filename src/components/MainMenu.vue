<template>
  <nav
    class="navbar is-primary"
    role="navigation"
  >
    <div class="container">
      <div class="navbar-brand">
        <p
          class="navbar-item"
          style="font-size:1.5em;"
        >Доставка пиццы</p>
        <div class="navbar-item">
          <!-- <div
            class="navbar-item"
            v-if="hasProduct()"
          >
            <p> В корзине {{totalItem}} продукта(ов)
            </p>
          </div> -->
          <div class="navbar-item">
            <a
              type="button"
              @click="isOpen = false"
            >
              <router-link
                to="/cart"
                class="button is-primary is-inverted"
              >
                <span class="icon">
                  <i class="fas fa-shopping-cart"></i>
                </span>
                <span
                  class="quantity"
                  v-if="hasProduct()"
                >{{totalItem}}</span>
              </router-link>
            </a>
          </div>
        </div>
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          @click="isOpen = !isOpen"
          :class="{'is-active':isOpen}"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        class="navbar-menu"
        :class="{'is-active':isOpen}"
      >
        <div class="navbar-end">
          <a
            role="button"
            @click="isOpen = !isOpen"
          >
            <router-link
              class="navbar-item"
              to="/pizzas"
            >Пиццы</router-link>
          </a>
          <a
            role="button"
            @click="isOpen = !isOpen"
          >
            <router-link
              class="navbar-item"
              to="/combo"
            >Комбо</router-link>
          </a>
          <a
            role="button"
            @click="isOpen = !isOpen"
          >
            <router-link
              class="navbar-item"
              to="/drink"
            >Напитки</router-link>
          </a>
          <a
            role="button"
            @click="isOpen = !isOpen"
          >
            <router-link
              class="navbar-item"
              to="/dessert"
            >Десерты</router-link>
          </a>
        </div>

      </div>

    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

//for responsiveness

export default {
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    //looking for is product is added to cart.
    hasProduct () {
      return this.getProductsInCart.length > 0;
    }
  },
  computed: {
    ...mapGetters(['getProductsInCart']),
    //counting how many products has cart.
    totalItem () {
      return this.getProductsInCart.reduce((total, next) =>
        total + next.quantity, 0);
    }
  }
}
</script>

<style scoped>
.cart-circle {
  border: 1px solid red;
}
.navbar-menu {
  position: absolute;
  width: 100%;
  z-index: 2;
}
</style>
