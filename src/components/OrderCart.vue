<template>
  <div class="container">
    <form
      action="#"
      class="field"
    >
      <div>
        <div
          class="form-item"
          :class="{ errorInput: $v.name.$error }"
        >
          <label for="#">Введите ФИО</label>
          <br>
          <input
            v-model="name"
            type="text"
            :class="{ 'is-danger error': $v.name.$error }"
            class="input is-primary input-text"
            @blur="$v.name.$touch()"
            placeholder="Мелисов Марсель Мелисович"
          >
          <div
            class="error"
            v-if="!$v.name.required"
          >
            <p> Пожалуйста, введите Ваши ФИО!</p>
          </div>
        </div>
        <div
          class="form-item"
          :class="{ errorInput: $v.phone.$error }"
        >
          <label for="#">Введите телефонный номер</label>
          <br>
          <input
            :class="{ 'is-danger error': $v.phone.$error }"
            v-model="phone"
            type="tel"
            class="input is-primary input-text"
            placeholder="+XXX YYY ZZ ZZ ZZ"
            @blur="$v.phone.$touch()"
          >
          <div
            class="error"
            v-if="!$v.phone.required"
          >Пожалуйста, введите Ваш телефонный номер!</div>
        </div>
        <div
          class="form-item"
          :class="{ errorInput: $v.address.$error }"
        >
          <label for="#">Введите адрес</label>
          <br>
          <input
            :class="{ 'is-danger error': $v.address.$error }"
            @blur="$v.address.$touch()"
            v-model="address"
            type="text"
            class="input is-primary input-text"
            placeholder="ул. Айни 89 пер. ул. Бакаева"
          >
          <div
            class="error"
            v-if="!$v.address.required"
          >Пожалуйста, введите Ваш телефонный номер!</div>
        </div>
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
import { required } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      name: '',
      phone: '',
      address: ''
    }
  },
  validations: {
    name: { required },
    phone: { required },
    address: { required }
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
.buttons {
  margin-top: 1em;
}
input.error {
  animation: shake 0.5s !important;
}
div.error {
}
.form-item > .error {
  display: none;
  margin-bottom: 8px;
  font-size: 13.4px;
  color: #ff3860;
}
.form-item.errorInput > .error {
  display: block;
}
</style>
