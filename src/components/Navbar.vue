<template>
  <nav class="sticky top-0 z-50 bg-gray-800">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <a
                href=""
                class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                aria-current="page"
              >
                <router-link class="link black" to="/">Products</router-link>
              </a>
            </div>
          </div>
        </div>

        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 space-x-14 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <button
            @click="toggleCartModal"
            type="button"
            class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white"
          >
            Cart
            <span
              class="text-white bg-red-700 absolute rounded-full text-xs -mt-3.5 ml-2 px-3 py-2"
              >{{ cartNumber || 0 }}</span
            >
          </button>

          <button
            @click="toggleMapModal"
            class="text-gray-400 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-map"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"
              />
            </svg>
          </button>

          <button
            @click="toggleUploadModal"
            type="button"
            class="text-white font-semibold bg-yellow-500 px-4 py-3 rounded-lg"
          >
            Upload Products
          </button>
        
          <button
            @click="downloadProduct"
            type="button"
            class="text-white font-semibold bg-gray-500 px-4 py-3 rounded-lg"
          >
            Download Product
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a
          href="#"
          class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          aria-current="page"
        >
          <router-link class="link" to="/">Products</router-link>
        </a>

        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <button
            @click="toggleCartModal"
            type="button"
            class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white"
          >
            Cart
            <span
              class="text-white bg-red-700 absolute rounded-full text-xs -mt-3.5 ml-2 px-3 py-2"
              >{{ cartNumber || 0 }}</span
            >
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
  props: {
    toggleCartModal: Function,
    toggleMapModal: Function,
    toggleUploadModal: Function,
    downloadProduct: Function
  },

  computed: {
    cartNumber() {
      return this.$store.getters.cartItems;
    },
  },
};
</script>
