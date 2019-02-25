import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pizzas: [{
        name: 'Пицца Оливье',
        description: 'Зеленый горошек, картофель и морковь в кубиках, огурцы маринованные, моцарелла, цыпленок, ветчина из говядины и французский соус с ароматом трюфеля',
        price: '625',
        image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/fb0750f4-fadd-4d7f-9324-17959bd67390.jpg'
      },
      {
        name: 'Пепперони-сердце',
        description: 'Салями, сыр моцарелла и пицца-соус',
        price: '545',
        image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/1b3aa54e-efc4-43d5-ab78-33b7f8e57ad4.jpg'
      },
      {
        name: 'Мексиканская',
        description: 'Лук красный, перец сладкий, пицца-соус, сыр моцарелла, томаты, халапеньо, цыпленок и соус сальса',
        price: '395',
        image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/01878c94-ef3c-4a78-88ab-98549e971dbd.jpg'
      },
      {
        name: 'Морская',
        description: 'Сыр моцарелла, пицца-соус, перец сладкий, маслины резанные, лук красный и креветки чищеные',
        price: '715',
        image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/7fd94752-f1dc-4d3c-8854-7e8b521ae348.jpg'
      },
      {
        name: 'Маргарита',
        description: 'Орегано, сыр моцарелла, пицца-соус и томаты',
        price: '495',
        image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/1c52efe9-3f50-4993-bf00-9e92631cdea8.jpg'
      },
      {
        name: 'Супермясная',
        description: 'Ветчина из говядины, колбаски охотничьи, пицца-соус, салями из говядины, сыр моцарелла и цыпленок',
        price: '775',
        image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/11652e25-bb00-4ffd-97c2-85ad12a1dda6.jpg'
      }
    ],
    combos: [{
        name: '2+2',
        description: 'Понравится всем! Хит продаж — Пепперони 30 см, нежная Маргарита 30 см и две бутылочки Coca-Cola 0,5 л.',
        price: '850',
        image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Combo/000D3A219740A95511E92AAB540BF7BE.jpg'
      }, {
        name: 'Пепперозавр',
        description: 'Утолит даже зверский аппетит! Пять сытных пицц 30 см с пепперони из говядины: Мясная, Пепперони, Двойная пепперони, Итальянская и Четыре сезона.',
        price: '2150',
        image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Combo/000D3A219740A95511E92AAAB7D5C73F.jpg'
      },
      {
        name: 'Большая 7-ка',
        description: 'Счастливый набор из семи пицц 30 см для большой компании: Пепперони, Сырный цыпленок, Цыпленок барбекю, Ветчина и грибы, Маргарита, Четыре сезона и Гавайская.',
        price: '2750',
        image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Combo/000D3A219740A95511E92AAB0BE28629.jpg'
      }
    ],
    drinks: [{
        name: 'Фанта',
        description: '1L',
        price: '85',
        image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Drinks/ru-RU/6ff67714-1109-4738-9223-75e56146897a.jpg'
      },
      {
        name: 'Спрайт',
        description: '1L',
        price: '85',
        image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Drinks/ru-RU/11ea79fc-6873-4d0b-9751-840f722a93b0.jpg'
      },
      {
        name: 'Чай холодный Fuse Tea Лимон',
        description: '1L',
        price: '95',
        image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Drinks/ru-RU/81d8ec9c-66e4-45f8-a033-0cbd321722fa.jpg'
      },
      {
        name: 'БонАква негаз',
        description: '1L',
        price: '65',
        image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Drinks/ru-RU/33156f94-1057-44eb-b4bd-8d48680066fc.jpg'
      },

    ],
    desserts: [{
        name: 'Рулетики с брусникой  ',
        description: 'Сладкие рулетики с натуральной брусникой, 16 шт.',
        price: '145',
        image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Desserts/ru-RU/e5741aa2-c91f-4d74-9867-8ad5ea56ccc3.jpg'
      },
      {
        name: 'Рулетики с корицей',
        description: 'Сладкие рулетики с корицей',
        price: '125',
        image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Desserts/ru-RU/d12ab477-b3ec-408b-915f-3b06832d726f.jpg'
      },
      {
        name: 'Фонданы, 2 шт',
        description: 'Шоколадный десерт с хрустящей корочкой и жидкой начинкой. Готовится в нашей печи специально для вас!',
        price: '240',
        image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Desserts/ru-RU/2f38fc10-32a2-45a3-8152-1cb0d37adfc1.jpg'
      },
      {
        name: 'Чизкейк',
        description: 'Классический американский чизкейк. Нежный десерт обладает в меру сладким бархатистым вкусом',
        price: '140',
        image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Desserts/ru-RU/aadfa967-cb6b-4c1b-813a-fc5e1e084c3f.jpg'
      },
    ],
    cartProducts: [],
    currentProduct: {},
  },
  getters: {
    getPizzas: state => state.pizzas,
    getCombos: state => state.combos,
    getDrinks: state => state.drinks,
    getDesserts: state => state.desserts,
    getProductsInCart: state => state.cartProducts,
    getCurrentProduct: state => state.currentProduct
  },
  mutations: {
    ADD_PRODUCT: (state, product) => {
      state.cartProducts.push(product);
    },
    REMOVE_PRODUCT: (state, index) => {
      state.cartProducts.splice(index, 1);
    },
    CURRENT_PRODUCT: (state, product) => {
      state.currentProduct = product;
    },
    CLEAR_CART: (state) => {
      state.cartProducts = [];
    }
  },
  actions: {
    addProduct: (context, product) => {
      context.commit('ADD_PRODUCT', product);
    },
    removeProduct: (context, index) => {
      context.commit('REMOVE_PRODUCT', index);
    },
    currentProduct: (context, product) => {
      context.commit('CURRENT_PRODUCT', product);
    },
    clearCart: (context) => {
      context.commit('CLEAR_CART')
    }
  }
});
