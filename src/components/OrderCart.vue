<template>
  <div class="container">
    <form
      action="#"
      class="field"
    >
      <label for="#">Введите ФИО</label>
      <div class="control">
        <input
          v-model="name"
          type="text"
          class="input is-primary input-text"
          placeholder="Мелисов Марсель Мелисович"
        >
      </div>
      <label for="#">Введите телефонный номер</label>
      <div class="control">
        <input
          v-model="phone"
          type="tel"
          class="input is-primary input-text"
          placeholder="+XXX YYY ZZ ZZ ZZ"
        >
      </div>
      <label for="#">Введите адрес</label>
      <div class="control">
        <input
          v-model="address"
          type="text"
          class="input is-primary input-text"
          placeholder="ул. Айни 89 пер. ул. Бакаева"
        >
      </div>
    </form>
    <strong>
      Ваш заказ:</strong>
    <ul>
      <li
        v-for="(product, index) in getProductsInCart"
        :key="index"
      >{{product.name}} x {{product.quantity}} = {{product.quantity*product.price}} сом</li>
    </ul>
    <strong>Всего к оплате: {{totalPrice}} сом</strong>
    <div class="buttons">
      <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-header">Спасибо за Ваш заказ!</header>
        </div>
      </div>
      <a class="button is-success">Подтвердить заказ</a>
      <router-link
        to="/cart"
        class="button is-danger"
      >Изменить заказ</router-link>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  data () {
    return {
      name: '',
      phone: '',
      address: ''
    }
  },
  computed: {
    ...mapGetters(['getProductsInCart']),
    totalPrice () {
      console.log(this.getProductsInCart);
      return this.getProductsInCart.reduce((total, next) =>
        total + (next.totalPrice || next.price), 0);
    }
  },
  methods: {

  }
}
</script>
<style scoped>
.container {
  margin-top: 2em;
}
.input-text {
  width: 30%;
}
</style>
