<template>
  <li class="flex py-6">
    <div
      class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
    >
      <img
        :src="product.image.src"
        :alt="product.image.alt"
        class="h-full w-full object-cover object-center"
      />
    </div>

    <div class="ml-4 flex flex-1 flex-col space-y-2">
      <div class="flex justify-between text-base font-medium text-gray-900">
        <h3>
          <a href="#">{{ product.title }}</a>
        </h3>
        <p class="ml-4">NGN{{ product.price }}</p>
      </div>

      <div class="flex flex-1 items-end justify-between text-sm">
        <div class="flex space-x-2">
          <p class="text-gray-500">Quantity</p>

          <input
            v-model="product.quantity"
            min="1"
            :max="product.product_quantity"
            type="number"
            id="quantity"
            class="block w-full text-base border-2 -mt-2 rounded-md px-2 py-1"
          />
        </div>

        <div class="flex">
          <button
            type="button"
            @click="removeProduct(product)"
            class="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Remove
          </button>
        </div>
      </div>

      <div class="flex flex-1 items-end justify-between text-sm">
        <p class="text-gray-500">Total</p>

        <div class="flex">
          <p class="text-sm">NGN {{ formatCurrency(itemTotal) }}</p>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import { formatCurrency } from "@/helper/formatCurrency";
export default {
  name: "CartItems",
  props: {
    cartProduct: Object,
    removeProduct: Function,
  },
  data() {
    return {
      product: this.cartProduct,
    };
  },

  computed: {
    itemTotal() {
      return Number(this.product.price) * Number(this.product.quantity);
    },
  },
  methods: { formatCurrency },
};
</script>
