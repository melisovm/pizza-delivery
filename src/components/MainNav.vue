<template>
  <nav
    class="navbar is-primary"
    role="navigation"
  >
    <div class="container">
      <div class="navbar-brand">
        <router-link
          to="/"
          class="navbar-item"
          style="font-size:1.5rem"
          @click="isOpen = false"
        >
          Доставка пиццы
        </router-link>
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
        <div
          class="navbar-end"
          v-for="category in getCategories"
          :key="category._id"
        >
          <a
            role="button"
            @click="isOpen = !isOpen"
          >
            <router-link
              class="navbar-item menu-button"
              :to="{ name: 'Products', params: { category: category.code } }"
              v-if="getCategoryProducts(category.code).length > 0"
            >{{category.name}}</router-link>
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
      isOpen: false,
    }

  },
  methods: {
    //looking for is product is added to cart.
    hasProduct () {
      return this.getProductsInCart.length > 0;
    }
  },
  computed: {
    ...mapGetters(['getProductsInCart', 'getCategories', 'getCategoryProducts']),
    //counting how many products has cart.
    totalItem () {
      return this.getProductsInCart.reduce((total, next) =>
        total + next.quantity, 0);
    }
  }
}
</script>

<style scoped>
.navbar-menu {
  position: absolute;
  width: 100%;
  z-index: 2;
  font-size: 1.3rem;
}
@media screen and (min-width: 1087px) {
  .navbar-menu {
    position: fixed;
    width: auto;
    margin-left: 55vw;
    margin-top: 0.6vw;
  }
  .menu-button {
    color: white;
    margin: 0;
  }
  .menu-button:hover {
    border-radius: 0.4em;
  }
}
</style>
