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
                readonly
                v-model="product.quantity"
              >
              <a
                class="button is-rounded is-primary is-inverted"
                @click="counterController(true,index)"
              >
                <i class="fas fa-plus"></i>
              </a>
              <button
                class="button"
                @click="checkButton(index)"
              >Check</button>
            </div>
            <div class="navbar-item">
              <h3>{{ product.totalPrice || product.price }} сом</h3>
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
  data () {
    return {
      quantity: 0,
      totalProductPrice: 0,
    }
  },
  computed: {
    ...mapGetters(['getProductsInCart']),
    totalPrice () {
      console.log(this.getProductsInCart);
      return this.getProductsInCart.reduce((total, next) =>
        total + (next.totalPrice || next.price), 0);
    },
  },
  methods: {
    ...mapActions(['removeProduct',
      'clearCart']),
    hasProduct () {
      return this.getProductsInCart.length > 0;
    },
    checkButton (index) {
      // console.log(this.getProductQuantity[index].name, ' - ', this.getProductQuantity[index].quantity);
      // console.log(this.getProductQuantity[index].price);
      console.log(this.getProductsInCart[index].totalPrice);
    },
    remove (index) {
      this.removeProduct(index);
    },
    clear () {
      this.clearCart();
    },
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
  display: grid;
  grid-template-columns: 3% 5fr 1fr 1fr 3%;
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
  margin-top: 2em;
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
</style>
