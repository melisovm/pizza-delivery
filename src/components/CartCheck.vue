<template>
  <div class="main">
    <div
      v-if="hasProduct()"
      class="change-font"
    >

      <div
        class="columns box is-vcentered"
        v-for="(product, index) in getProductsInCart"
        :key="index"
      >
        <div class="navbar-brand">
          <div class="navbar-item ">
            <img :src="getImageUrl(product.image)">
          </div>
        </div>
        <div class="navbar-item column is-one-third">
          <h3> {{product.name}}</h3>
        </div>
        <div class="navbar-item">
          <a
            class="button is-rounded is-primary is-inverted"
            @click="counterController(false,index)"
          >
            <i class="fas fa-minus"></i>
          </a>
          <input
            type="text"
            class="input is-primary input-counter"
            v-model="product.quantity"
          >
          <a
            class="button is-rounded is-primary is-inverted"
            @click="counterController(true,index)"
          >
            <i class="fas fa-plus"></i>
          </a>

        </div>
        <div class="navbar-item">
          <h3>{{ product.quantity * product.price }} сом</h3>
        </div>
        <div class="navbar-end">
          <a
            class="button is-rounded is-primary is-inverted"
            @click="remove(index)"
          ><i class="fas fa-times"></i></a>
        </div>
      </div>
      <div class="button-clear">
        <h2 class="total-text">Всего {{totalPrice}} сом</h2>
        <div class="buttons total-clear">
          <router-link
            to="/ordercart"
            class="button is-danger"
            @click="clear()"
          >Выполнить заказ</router-link>
          <a
            class="button is-primary"
            @click="clear()"
          >Очистить корзину</a>
        </div>
      </div>
    </div>
    <div
      v-else
      class="no-item"
    >
      <img
        src="../assets/no-item-pizza.png"
        alt=""
        class="no-item-image"
      >
      <div class="no-item-text">
        У Вас нет добавленного продукта
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';

export default {
  data () {
    return {
      quantity: 0,
      totalProductPrice: 0,
    }
  },
  computed: {
    ...mapGetters(['getProductsInCart']),
    ...mapState(['defaultUrl']),
    // calculating all total cost.
    totalPrice () {
      return this.getProductsInCart.reduce((total, next) =>
        total + (next.quantity * next.price), 0);
    },

  },
  methods: {
    ...mapActions(['removeProduct',
      'clearCart']),
    //checks if cart has any product.
    hasProduct () {
      return this.getProductsInCart.length > 0;
    },
    getImageUrl (ImageName) {
      return this.defaultUrl + '/image/' + ImageName;
    },
    //deleting the product from Cart.
    remove (index) {
      this.removeProduct(index);
    },
    //clearing the cart.
    clear () {
      this.clearCart();
    },
    //controls -/+ buttons 
    counterController (checker, index) {
      if (checker == true) {
        this.getProductsInCart[index].quantity++;
        this.getProductsInCart[index].totalPrice = this.getProductsInCart[index].quantity * this.getProductsInCart[index].price;
      }
      else {
        this.getProductsInCart[index].quantity--;
        this.getProductsInCart[index].totalPrice = this.getProductsInCart[index].quantity * this.getProductsInCart[index].price;
        if (this.getProductsInCart[index].quantity <= 0) {
          this.removeProduct(index);
        }
        else {

        }
      }
    },


  }
}
</script>

<style scoped>
.main {
  margin: 2em;
}
.columns {
  border-radius: 0.3em;
  z-index: 1;
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
.total-clear {
  margin-top: 0.5em;
}
.no-item-text {
  margin-top: 0.5em;
}
.total-text {
  font-size: 1.5em;
}
.far {
  color: #fff;
}
.input-counter {
  width: 2.5em;
  cursor: pointer;
}
.no-item-image {
  max-width: 5em;
}
/* Responsiveness */
/* smartphones */
@media screen and (max-width: 620px) {
  .change-font {
    font-size: 1rem;
  }
  .navbar-brand {
    display: none;
  }
  .navbar-item > h3 {
  }
  .navbar-brand > .navbar-item {
    padding-left: 0;
  }
  .navbar-item {
    padding-left: 0;
  }
  .navbar-item > a {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  .box {
    padding-bottom: 0.1rem;
    padding-top: 0.1rem;
  }
  .input-counter {
    width: 2.3rem;
    cursor: pointer;
  }

  .columns {
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
}
/* Tablets */
@media screen and (min-width: 621px) and (max-width: 768px) {
  .navbar-brand > .navbar-item {
    padding-left: 0;
  }
  .navbar-item {
    padding-left: 0;
  }
  .navbar-item > a {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  .box {
    padding-bottom: 0.1rem;
    padding-top: 0.1rem;
  }
  .input-counter {
    width: 2.5rem;
    cursor: pointer;
  }

  .columns {
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
}
/* small laptops and big tablets */
@media screen and (min-width: 769px) and (max-width: 1088px) {
  .box {
    padding-bottom: 0.1rem;
    padding-top: 0.1rem;
  }
  .input-counter {
    width: 2.5rem;
    cursor: pointer;
  }
  .columns {
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
}
/* laptops */
@media screen and (min-width: 1171px) {
}
</style>
