<template>
  <div>
    <ProductList
      :products="products"
      :addProductToCart="addProductToCart"
      :showCart="showCart"
    />
  </div>
</template>

<script>
import ProductList from "@/components/ProductList.vue";

export default {
  name: "ProductPage",
  components: { ProductList },
  data() {
    return {
      showCart: false,
    };
  },

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
