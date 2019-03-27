import Vue from "vue";
import Vuex from "vuex";
import axios from './plugins/axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    defaultUrl: "http://devforge.ddns.net:2000",
    cartProducts: [],
    orders: [],
    promotions: [],
    categories: [],
    currentProduct: {}
  },
  getters: {
    //get news or sales
    getPromotions: state => state.promotions,
    //get all pizas.
    getPizzas: state => state.products.filter(element => element.category === "pizzas"),
    //get all combos.
    getCombos: state => state.products.filter(element => element.category === "combos"),
    //get all drinks.
    getDrinks: state => state.products.filter(element => element.category === "drinks"),
    //get all desserts.
    getDesserts: state => state.products.filter(element => element.category === "desserts"),
    //get product with exact category 
    getCategoryProducts: state => category => state.products.filter(item => item.category === category),
    //get products in cart
    getProductsInCart: state => state.cartProducts,
    //get selected product
    getCurrentProduct: state => state.currentProductg,
    getCategories: state => state.categories
  },

  mutations: {
    //adding product to cart.
    ADD_PRODUCT: (state, product) => {
      state.cartProducts.push(product);
      product.quantity++;
    },
    //deleting product from cart.
    REMOVE_PRODUCT: (state, index) => {
      state.cartProducts.splice(index, 1);
    },
    //current selected product
    CURRENT_PRODUCT: (state, product) => {
      state.currentProduct = product;
    },
    //clearing all cart.
    CLEAR_CART: state => {
      state.cartProducts = [];
    },
    //adding product to its quantity.
    INC_PRODUCT: (state, indexOfProduct) => {
      state.cartProducts[indexOfProduct].quantity++;
    },
    SET_PRODUCTS: (state, products) => {
      state.products = products;
    },
    SET_PROMOTION: (state, promotions) => {
      state.promotions = promotions
    },
    SET_CATEGORIES: (state, categories) => {
      state.categories = categories
      console.log(state.categories);
    },
    ADD_ORDER: (state, order) => {
      state.orders.push(order);
      console.log('pushed');
      console.log(state.orders);
    }
  },

  actions: {
    addProduct: ({
      state,
      commit,
    }, product) => {
      let productId = [];
      state.cartProducts.forEach(product => {
        productId.push(product._id)
      })

      if (productId.indexOf(product._id) === -1) {
        commit("ADD_PRODUCT", product);
      } else {
        commit("INC_PRODUCT", productId.indexOf(product._id));
      }
    },
    removeProduct: ({
      commit
    }, index) => {
      commit("REMOVE_PRODUCT", index);
    },
    currentProduct: ({
      commit
    }, product) => {
      commit("CURRENT_PRODUCT", product);
    },
    clearCart: ({
      commit
    }) => {
      commit("CLEAR_CART");
    },
    fetchProduct({
      commit
    }) {
      axios.get('product')
        .then(response => {
          let products = response.data.products;
          products.forEach(product => {
            product.quantity = '';
          })
          commit('SET_PRODUCTS', products);
        })
        .catch(err => console.error(err));
    },
    fetchPromotions({
      commit
    }) {
      axios.get('promotion')
        .then(res => {
          let promotions = res.data.promotions
          commit("SET_PROMOTION", promotions)
        })
        .catch(err => console.error(err));
    },
    fetchCategories({
      commit
    }) {
      axios.get('category')
        .then(res => {
          let categories = res.data.categories
          commit("SET_CATEGORIES", categories)
        })
        .catch(err => console.error(err))
    },
    addOrder({
      commit
    }, order) {
      axios
        .post('order', order)
        .then(response => console.log("added order", response.data))
        .catch(err => console.error(err))
      commit('ADD_ORDER', order);

    }
  }
});
