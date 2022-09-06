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
// const API_URL_DEV = process.env.VUE_APP_API_URL_DEV;

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

    // async downloadProduct() {
    //   fetch(`${API_URL_DEV}/download`)
    //     .then((res) => {
    //       return res.blob();
    //     })
    //     .then((data) => {
    //       let docUrl = document.createElement("a");
    //       docUrl.href = window.URL.createObjectURL(data);
    //       docUrl.download = "filename.xlsx";
    //       document.body.appendChild(docUrl)
    //       docUrl.click();
    //     });
    // },

    async downloadProduct() {
      downloadProductSheet();
    },
  },
};
</script>
