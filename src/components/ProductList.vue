<template>
  <div class="bg-white">
    <div
      class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">
        Available Products
      </h2>

      <div
        class="mt-6 grid grid-cols-1 gap-y-20 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      >
        <div
          v-for="(product, index) in products"
          :key="index"
          class="group relative"
        >
          <!-- PRODUCT IMAGE -->
          <div
            class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80 lg:aspect-none"
          >
            <img
              :src="product.image.src"
              :alt="product.image.alt"
              class="w-full h-full object-center group-hover:opacity-75 object-cover lg:w-full lg:h-full"
            />
          </div>

          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a :href="product.href">
                  <!-- <span aria-hidden="true" class="absolute inset-0" /> -->
                  {{ product.name }}
                </a>
              </h3>

              <button
                @click="addToCart(product)"
                type="button"
                class="mt-5 text-white bg-[#050708] focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 mr-2 mb-2"
              >
                <svg
                  aria-hidden="true"
                  class="mr-2 -ml-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                  ></path>
                </svg>
                Add to cart
              </button>
            </div>
            <p class="text-sm font-medium text-gray-900">
              NGN{{ formatCurrency(product.price) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatCurrency } from "@/helper/formatCurrency";

export default {
  name: "ProductList",
  props: {
    products: Array,
    addProductToCart: Function,
    showCart: Boolean,
  },

  methods: {
    formatCurrency,
    addToCart(product) {
      this.addProductToCart(product);
    },
  },
};
</script>
