<template>
  <div>
    <ProductList
      :products="products"
      :addProductToCart="addProductToCart"
    />
  </div>
</template>

<script>
import ProductList from "@/components/ProductList.vue";

export default {
  name: "ProductPage",
  components: { ProductList },

  computed: {
    products() {
      return this.$store.getters.availableProducts;
    },
  },

  methods: {
    addProductToCart(product) {
      this.$store.dispatch("addProductToCart", product);
    },
  },

  mounted() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>
