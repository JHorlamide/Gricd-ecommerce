<template>
  <div id="app">
    <Navigation :toggleCartModal="toggleCartModal" />
    <CheckoutComponent
      :showCartModal="showCartModal"
      :toggleCartModal="toggleCartModal"
    />
    <router-view />
  </div>
</template>

<script>
import Navigation from "@/components/Navbar.vue";
import CheckoutComponent from "@/components/Checkout.vue";

export default {
  name: "App",
  components: {
    Navigation,
    CheckoutComponent,
    // UserLocation,
    // MapComponent,
    // UserMap,
  },

  data() {
    return {
      showCartModal: false,
    };
  },

  methods: {
    toggleCartModal() {
      this.showCartModal = !this.showCartModal;
    },
  },
};
</script>
