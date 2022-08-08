import fetchProduct from "@/api/fetchProduct";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    
  },

  getters: {
    availableProducts(state) {
      return state.products;
    },

    cartProducts(state) {
      return state.cart;
    },

    cartTotal(state, getters) {
      return getters.cartProducts.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
    },

    cartItems(state) {
      return state.cart.length;
    },
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },

    pushProductToCart(state, product) {
      state.cart.push({
        id: product.id,
        quantity: 1,
        image: product.image,
        title: product.name,
        price: product.price,
        product_price: product.price,
        product_quantity: product.quantity,
      });
    },

    popProductFromCart(state, product_id) {
      state.cart = state.cart.filter((cartItem) => cartItem.id !== product_id);
    },

    removeAllProducts(state) {
      state.cart = [];
    },

    incrementProductInventory(state, product) {
      product.quantity--;
    },

    incrementItemQuantity(state, cartItem) {
      const product = state.products.find(
        (product) => product.id === cartItem.id
      );

      cartItem.quantity++;
      product.quantity--;
      cartItem.product_price = cartItem.quantity * product.price;
    },
  },
  actions: {
    fetchProducts({ commit }) {
      return new Promise((resolve) => {
        fetchProduct.getProducts((products) => {
          commit("setProducts", products);
          resolve();
        });
      });
    },

    addProductToCart(context, product) {
      if (product.quantity > 0) {
        const cartItem = context.state.cart.find(
          (item) => item.id === product.id
        );

        if (!cartItem) {
          context.commit("pushProductToCart", product);
        } else {
          context.commit("incrementItemQuantity", cartItem);
        }
      }
    },

    removeProduct(context, product) {
      context.commit("popProductFromCart", product.id);
      context.commit("incrementProductInventory", product);
    },

    removeCartProducts(context) {
      context.commit("removeAllProducts");
    },
  },
  modules: {},
});
