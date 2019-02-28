import Vue from 'vue';
import Router from 'vue-router';
import Pizza from '../components/Pizza';
import Combo from '../components/Combo';
import Drink from '../components/Drink';
import Dessert from '../components/Dessert';
import CartCheck from '../components/CartCheck';
import OrderCart from '../components/OrderCart'

Vue.use(Router);
export default new Router({
  mode: 'history',
  routes: [{
      path: '/pizzas',
      name: 'Pizzas',
      component: Pizza
    }, {
      path: '/combo',
      name: 'Combo',
      component: Combo
    }, {
      path: '/drink',
      name: 'Drink',
      component: Drink
    },
    {
      path: '/dessert',
      name: 'Dessert',
      component: Dessert
    },
    {
      path: '/cart',
      name: 'Cart',
      component: CartCheck
    },
    {
      path: '/ordercart',
      name: 'OrderCart',
      component: OrderCart
    }
  ]
});
