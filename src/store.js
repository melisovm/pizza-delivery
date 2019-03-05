import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pizzas: [{
        name: "Пицца Оливье",
        description: "Зеленый горошек, картофель и морковь в кубиках, огурцы маринованные, моцарелла, цыпленок, ветчина из говядины и французский соус с ароматом трюфеля",
        price: 625,
        image: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/fade8c33-27e4-4c84-acd2-4a0138f7baa1.jpg",
        quantity: 0,
        id: 1,
        totalPrice: 0,
        halalState: true,
        date: "1.01.2019"
      },
      {
        name: "Пепперони-сердце",
        description: "Салями, сыр моцарелла и пицца-соус",
        price: 545,
        image: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/1b3aa54e-efc4-43d5-ab78-33b7f8e57ad4.jpg",
        quantity: 0,
        id: 2,
        totalPrice: 0,
        halalState: true,
        date: "1.03.2019"
      },
      {
        name: "Мексиканская",
        description: "Лук красный, перец сладкий, пицца-соус, сыр моцарелла, томаты, халапеньо, цыпленок и соус сальса",
        price: 395,
        image: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/01878c94-ef3c-4a78-88ab-98549e971dbd.jpg",
        quantity: 0,
        id: 3,
        totalPrice: 0,
        halalState: true,
        date: "1.03.2018"
      },
      {
        name: "Пицца Оливье",
        description: "Зеленый горошек, картофель и морковь в кубиках, огурцы маринованные, моцарелла, цыпленок, ветчина из говядины и французский соус с ароматом трюфеля",
        price: 625,
        image: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/7a005ff3-922d-4be1-8c18-0acfb304ca31.jpg",
        quantity: 0,
        id: 1,
        totalPrice: 0,
        halalState: false,
        date: "1.03.2019"
      },
      {
        name: "Пепперони-сердце",
        description: "Салями, сыр моцарелла и пицца-соус",
        price: 545,
        image: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/1b3aa54e-efc4-43d5-ab78-33b7f8e57ad4.jpg",
        quantity: 0,
        id: 2,
        totalPrice: 0,
        halalState: true,
        date: "1.03.2018"
      },
      {
        name: "Мексиканская",
        description: "Лук красный, перец сладкий, пицца-соус, сыр моцарелла, томаты, халапеньо, цыпленок и соус сальса",
        price: 395,
        image: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/01878c94-ef3c-4a78-88ab-98549e971dbd.jpg",
        quantity: 0,
        id: 3,
        totalPrice: 0,
        halalState: true,
        date: "1.03.2019"
      },
      {
        name: "Морская",
        description: "Сыр моцарелла, пицца-соус, перец сладкий, маслины резанные, лук красный и креветки чищеные",
        price: 715,
        image: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/7fd94752-f1dc-4d3c-8854-7e8b521ae348.jpg",
        quantity: 0,
        id: 4,
        totalPrice: 0,
        halalState: false,
        date: "1.03.2018"
      },
      {
        name: "Маргарита",
        description: "Орегано, сыр моцарелла, пицца-соус и томаты",
        price: 495,
        image: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/1c52efe9-3f50-4993-bf00-9e92631cdea8.jpg",
        quantity: 0,
        id: 5,
        totalPrice: 0,
        halalState: true,
        date: "1.03.2019"
      },
      {
        name: "Супермясная",
        description: "Ветчина из говядины, колбаски охотничьи, пицца-соус, салями из говядины, сыр моцарелла и цыпленок",
        price: 775,
        image: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/11652e25-bb00-4ffd-97c2-85ad12a1dda6.jpg",
        quantity: 0,
        id: 6,
        totalPrice: 0,
        halalState: false,
        date: "1.03.2018"
      }
    ],
    combos: [{
        name: "2+2",
        description: "Понравится всем! Хит продаж — Пепперони 30 см, нежная Маргарита 30 см и две бутылочки Coca-Cola 0,5 л.",
        price: 850,
        image: "https://dodopizza-a.akamaihd.net/static/Img/Products/Combo/000D3A219740A95511E92AAB540BF7BE.jpg",
        quantity: 0,
        id: 7,
        totalPrice: 0,
        halalState: true,
        date: "1.03.2019"
      },
      {
        name: "Пепперозавр",
        description: "Утолит даже зверский аппетит! Пять сытных пицц 30 см с пепперони из говядины: Мясная, Пепперони, Двойная пепперони, Итальянская и Четыре сезона.",
        price: 2150,
        image: "https://dodopizza-a.akamaihd.net/static/Img/Products/Combo/000D3A219740A95511E92AAAB7D5C73F.jpg",
        quantity: 0,
        id: 8,
        totalPrice: 0,
        halalState: false,
        date: "1.03.2018"
      },
      {
        name: "Большая 7-ка",
        description: "Счастливый набор из семи пицц 30 см для большой компании: Пепперони, Сырный цыпленок, Цыпленок барбекю, Ветчина и грибы, Маргарита, Четыре сезона и Гавайская.",
        price: 2750,
        image: "https://dodopizza-a.akamaihd.net/static/Img/Products/Combo/000D3A219740A95511E92AAB0BE28629.jpg",
        quantity: 0,
        id: 9,
        totalPrice: 0,
        halalState: true,
        date: "1.03.2019"
      }
    ],
    drinks: [{
        name: "Фанта",
        description: "1L",
        price: 85,
        image: "https://dodopizza-a.akamaihd.net/static/Img/Products/Drinks/ru-RU/6ff67714-1109-4738-9223-75e56146897a.jpg",
        quantity: 0,
        id: 10,
        totalPrice: 0,
        date: "1.03.2019"
      },
      {
        name: "Спрайт",
        description: "1L",
        price: 85,
        image: "https://dodopizza-a.akamaihd.net/static/Img/Products/Drinks/ru-RU/11ea79fc-6873-4d0b-9751-840f722a93b0.jpg",
        quantity: 0,
        id: 11,
        totalPrice: 0,
        date: "1.03.2018"
      },
      {
        name: "Чай холодный Fuse Tea Лимон",
        description: "1L",
        price: 95,
        image: "https://dodopizza-a.akamaihd.net/static/Img/Products/Drinks/ru-RU/81d8ec9c-66e4-45f8-a033-0cbd321722fa.jpg",
        quantity: 0,
        id: 12,
        totalPrice: 0,
        date: "1.03.2019"
      },
      {
        name: "БонАква негаз",
        description: "1L",
        price: 65,
        image: "https://dodopizza-a.akamaihd.net/static/Img/Products/Drinks/ru-RU/33156f94-1057-44eb-b4bd-8d48680066fc.jpg",
        quantity: 0,
        id: 13,
        totalPrice: 0,
        date: "1.03.2018"
      }
    ],
    desserts: [{
        name: "Рулетики с брусникой  ",
        description: "Сладкие рулетики с натуральной брусникой, 16 шт.",
        price: 145,
        image: "https://dodopizza-a.akamaihd.net/static/Img/Products/Desserts/ru-RU/e5741aa2-c91f-4d74-9867-8ad5ea56ccc3.jpg",
        quantity: 0,
        id: 14,
        totalPrice: 0,
        halalState: true,
        date: "1.03.2019"
      },
      {
        name: "Рулетики с корицей",
        description: "Сладкие рулетики с корицей",
        price: 125,
        image: "https://dodopizza-a.akamaihd.net/static/Img/Products/Desserts/ru-RU/d12ab477-b3ec-408b-915f-3b06832d726f.jpg",
        quantity: 0,
        id: 15,
        totalPrice: 0,
        halalState: true,
        date: "1.03.2018"
      },
      {
        name: "Фонданы, 2 шт",
        description: "Шоколадный десерт с хрустящей корочкой и жидкой начинкой. Готовится в нашей печи специально для вас!",
        price: 240,
        image: "https://dodopizza-a.akamaihd.net/static/Img/Products/Desserts/ru-RU/2f38fc10-32a2-45a3-8152-1cb0d37adfc1.jpg",
        quantity: 0,
        id: 16,
        totalPrice: 0,
        halalState: true,
        date: "1.03.2019"
      },
      {
        name: "Чизкейк",
        description: "Классический американский чизкейк. Нежный десерт обладает в меру сладким бархатистым вкусом",
        price: 140,
        image: "https://dodopizza-a.akamaihd.net/static/Img/Products/Desserts/ru-RU/aadfa967-cb6b-4c1b-813a-fc5e1e084c3f.jpg",
        quantity: 0,
        id: 17,
        totalPrice: 0,
        halalState: true,
        date: "1.03.2018"
      }
    ],
    cartProducts: [],
    promotions: [{
        name: "День Рождения",
        description: "В день вашего рождения дарим Пиццу-пирог 25 см! Акция действует по промокоду D120 один раз.",
        image: "http://www.metroves.ru/upload/iblock/e71/e7173f9295275c498c4491536ac1a76c.png"
      },
      {
        name: "Доставим вовремя или за наш счет",
        description: "Мы придерживаемся золотых правил и всегда следим за тем, чтобы наши заказы доставлялись вовремя, а лучше даже раньше обещанного времени.",
        image: "http://mobile.mypizza.kg:9715/api/ImageFor?id=3115"
      }
    ],
    currentProduct: {}
  },
  getters: {
    //get news or sales
    getPromotions: state => state.promotions,
    //get all pizas.
    getPizzas: state => state.pizzas,
    //get all combos.
    getCombos: state => state.combos,
    //get all drinks.
    getDrinks: state => state.drinks,
    //get all desserts.
    getDesserts: state => state.desserts,
    //get products in cart
    getProductsInCart: state => state.cartProducts,
    //get selected product
    getCurrentProduct: state => state.currentProduct
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
    }
  },
  actions: {
    addProduct: ({
      state,
      commit,
      dispatch
    }, product) => {
      let indexProduct = state.cartProducts.indexOf(product);
      if (indexProduct === -1) {
        commit("ADD_PRODUCT", product);
      } else {
        commit("INC_PRODUCT", indexProduct);
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
    }
  }
});
