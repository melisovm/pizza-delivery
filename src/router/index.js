import Vue from 'vue';
import Router from 'vue-router';
import CartCheck from '../components/CartCheck';
import OrderCart from '../components/OrderCart'
import MainPage from '../components/MainPage'
import MainMenu from '../components/MainMenu'
import ListOfProducts from '../components/ListOfProducts'


Vue.use(Router);
export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'MainPage',
      component: MainPage
    }, {
      path: '/products/:category',
      name: 'Products',
      component: ListOfProducts
    },
    {
      path: '/menu',
      name: 'MainMenu',
      component: MainMenu
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
    },
  ]
});
