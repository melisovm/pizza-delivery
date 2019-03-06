import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App'
import router from './router'
import store from './store'
import "izitoast/dist/css/iziToast.css";
import VueIziToast from "vue-izitoast";

Vue.use(Vuelidate);
Vue.use(VueIziToast);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
