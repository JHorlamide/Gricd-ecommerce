<template>
  <div id="app">
    <Navigation :toggleCartModal="toggleCartModal" />
    <MapComponent />
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
import MapComponent from "@/components/Map.vue";

export default {
  name: "App",
  components: {
    Navigation,
    CheckoutComponent,
    MapComponent,
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
