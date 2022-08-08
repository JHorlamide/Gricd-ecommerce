<template>
  <div
    class="relative z-10"
    aria-labelledby="slide-over-title"
    role="dialog"
    aria-modal="true"
    v-show="showCartModal"
  >
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
    ></div>

    <div class="fixed inset-0 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div
          class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
        >
          <div class="pointer-events-auto w-screen max-w-2xl">
            <div
              class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl"
            >
              <!-- CART CONTENT -->
              <div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                <!-- CART HEADER START -->
                <div class="flex items-start justify-between px-3 mt-3">
                  <h2
                    class="text-xl font-medium text-gray-900"
                    id="slide-over-title"
                  >
                    Shopping cart
                  </h2>

                  <div class="ml-3 flex h-7 items-center">
                    <button
                      type="button"
                      class="-m-2 p-2 text-gray-400 hover:text-gray-500"
                      @click="toggleCartModal"
                    >
                      <span class="sr-only">Close panel</span>
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <!-- CART HEADER END -->
                <div class="mt-8">
                  <div v-if="isCartEmpty" class="text-center">
                    <p class="bg-washed-red pv3 ph2 br2">Your cart is empty!</p>
                  </div>

                  <div class="flow-root space-y-5">
                    <ul
                      v-for="product in products"
                      :key="product.id"
                      role="list"
                      class="-my-6 divide-y divide-gray-200"
                    >
                      <CartItem
                        :cartProduct="product"
                        :removeProduct="removeProduct"
                      />
                    </ul>
                  </div>
                </div>
              </div>

              <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
                <div
                  class="flex justify-between text-base font-medium text-gray-900"
                >
                  <p>Subtotal</p>
                  <div :v-if="isCartEmpty">
                    <p>NGN {{ formatCurrency(total) }}</p>
                  </div>
                </div>
                <div class="mt-6 flex justify-evenly space-x-5">
                  <button
                    @click="checkout"
                    class="flex items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700"
                  >
                    Checkout
                  </button>

                  <button
                    href="#"
                    @click="removeCartProducts"
                    class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 hover:bg-indigo-700 px-6 py-3 text-base font-medium text-white shadow-sm"
                  >
                    Clear Cart
                  </button>
                </div>
                <div
                  class="mt-6 flex justify-center text-center text-sm text-gray-500"
                >
                  <p>
                    or
                    <button
                      type="button"
                      @click="toggleCartModal"
                      class="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Continue Shopping<span aria-hidden="true"> &rarr;</span>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";
import { formatCurrency } from "@/helper/formatCurrency";

export default {
  name: "CheckoutComponent",
  components: { CartItem },
  props: {
    showCartModal: Boolean,
    toggleCartModal: Function,
  },

  computed: {
    products() {
      return this.$store.getters.cartProducts;
    },

    total() {
      return this.$store.getters.cartTotal;
    },

    cartNumber() {
      return this.$store.getters.CartItems;
    },

    isCartEmpty() {
      return this.products.length > 0 ? false : true;
    },
  },

  methods: {
    formatCurrency,

    removeProduct(product) {
      this.$store.dispatch("removeProduct", product);
    },

    removeCartProducts() {
      this.$store.dispatch("removeCartProducts");
    },

    checkout() {
      this.removeCartProducts();

      setTimeout(() => {
        this.toggleCartModal();
      }, 300);
    },
  },
};
</script>
