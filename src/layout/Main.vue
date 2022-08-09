<template>
  <div>
    <Navigation
      :toggleCartModal="toggleCartModal"
      :toggleMapModal="toggleMapModal"
    />

    <CheckoutComponent
      :showCartModal="showCartModal"
      :toggleCartModal="toggleCartModal"
    />

    <MapModal :showMapModal="showMapModal" :toggleMapModal="toggleMapModal" />

    <router-view />
  </div>
</template>

<script>
import Navigation from "@/components/Navbar.vue";
import CheckoutComponent from "@/components/Checkout.vue";
import MapModal from "@/components/MapModal.vue";

export default {
  name: "App",
  components: {
    Navigation,
    MapModal,
    CheckoutComponent,
  },

  data() {
    return {
      showCartModal: false,
      showMapModal: false,
    };
  },

  methods: {
    toggleCartModal() {
      this.showCartModal = !this.showCartModal;
    },

    toggleMapModal() {
      this.showMapModal = !this.showMapModal;
    },
  },
};
</script>
