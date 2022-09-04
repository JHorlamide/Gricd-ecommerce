<template>
  <div>
    <Navigation
      :toggleCartModal="toggleCartModal"
      :toggleMapModal="toggleMapModal"
      :toggleUploadModal="toggleUploadModal"
      :downloadProduct="downloadProduct"
    />

    <CheckoutComponent
      :showCartModal="showCartModal"
      :toggleCartModal="toggleCartModal"
    />

    <MapModal :showMapModal="showMapModal" :toggleMapModal="toggleMapModal" />

    <UploadModal
      :showUploadModal="showUploadModal"
      :toggleUploadModal="toggleUploadModal"
    />

    <router-view />
  </div>
</template>

<script>
import Navigation from "@/components/Navbar.vue";
import CheckoutComponent from "@/components/Checkout.vue";
import MapModal from "@/components/MapModal.vue";
import UploadModal from "@/components/UploadModal.vue";

import { downloadProductSheet } from "@/api/products";

export default {
  name: "App",
  components: {
    Navigation,
    MapModal,
    UploadModal,
    CheckoutComponent,
  },

  data() {
    return {
      showCartModal: false,
      showMapModal: false,
      showUploadModal: false,
    };
  },

  methods: {
    toggleCartModal() {
      this.showCartModal = !this.showCartModal;
    },

    toggleMapModal() {
      this.showMapModal = !this.showMapModal;
    },

    toggleUploadModal() {
      this.showUploadModal = !this.showUploadModal;
    },

    async downloadProduct() {
      const response = await downloadProductSheet();
      console.log("Res: ", response);
    },
  },
};
</script>
