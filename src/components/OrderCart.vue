<template>
  <div class="container">
    <form
      @submit.prevent="onSubmit"
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
          <masked-input
            :class="{ 'is-danger error': $v.phone.$error }"
            v-model="phone"
            type="tel"
            mask="\+\996 (111) 11-11-11"
            class="input is-primary input-text"
            placeholder="+996 (___)__-__-__"
            @blur="$v.phone.$touch()"
          />
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
        <button
          type="submit"
          class="button is-success"
          :disabled="(submitStatus === 'PENDING')"
        >Подтвердить заказ</button>
        <router-link
          to="/cart"
          class="button is-danger"
        >Изменить заказ</router-link>
      </div>
    </form>
    <p
      class="typo__p"
      v-if="submitStatus === 'OK'"
    >Ваш заказ отправлен, дождитесь звонка оператора!</p>
    <p
      class="error"
      v-if="submitStatus === 'ERROR'"
    >Заполняйте все объязательные поля!</p>
    <p
      class="typo__p"
      v-if="submitStatus === 'PENDING'"
    >Выполняется...</p>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
//validation controlls all 3 inputs to be required.
import { required } from 'vuelidate/lib/validators'
//validation controlls phone number input.
import MaskedInput from 'vue-masked-input'

export default {
  data () {
    return {
      name: '',
      phone: '',
      address: '',
      submitStatus: null,
      product: {
        quantity: 0
      }
    }
  },
  validations: {
    name: {},
    phone: { required },
    address: { required }
  },
  computed: {
    ...mapGetters(['getProductsInCart']),
    //all cost.
    totalPrice () {
      return this.getProductsInCart.reduce((total, next) =>
        total + (next.quantity * next.price), 0);
    }
  },
  components: {
    //used for phone number validation.
    MaskedInput
  },
  methods: {
    //submit button validation.
    onSubmit () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        const orderCart = {
          customer_name: this.name,
          phone: this.phone,
          address: this.address,
          orderList: this.getProductsInCart.map(element => {
            return {
              product_id: element._id,
              product_quantity: element.quantity
            }
          }),
          total_price: this.totalPrice
        }
        console.log(orderCart);
        this.submitStatus = 'PENDING'
        this.$store.dispatch("addOrder", orderCart);
        this.submitStatus = 'OK'
        this.$toast.open({
          message: `Ваш заказ принят! `,
          duration: 3000,
          position: 'is-top',
          type: 'is-dark'
        });

      }
    }
  }
}
</script>
<style scoped>
.container {
  margin-top: 2em;
  margin-left: 3%;
  margin-right: 3%;
}
.field {
  width: 100%;
}
.buttons {
  margin-top: 1em;
}
.error {
  color: #ff3860;
}
.form-item > .error {
  display: none;
}
.form-item.errorInput > .error {
  display: block;
}
</style>
