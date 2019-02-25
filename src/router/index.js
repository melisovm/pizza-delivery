import Vue from 'vue';
import Router from 'vue-router';
import ProductsList from '../components/ProductsList';
import ProductItem from '../components/ProductItem';
import MainMenu from '../components/MainMenu';
import Pizza from '../components/Pizza';
import Combo from '../components/Combo';
import Drink from '../components/Drink';
import Dessert from '../components/Dessert';
import CartCheck from '../components/CartCheck';

Vue.use(Router);
export default new Router({
  routes: [{
      path: '/',
      name: 'All Products',
      component: ProductsList,
    }, {
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
    }
  ]
});
