<template>
  <!-- Main modal -->
  <div
    id="defaultModal"
    tabindex="-1"
    class="-mt-44 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex flex-col"
    aria-modal="true"
    role="dialog"
    v-show="showUploadModal"
  >
    <!-- Toast Start -->
    <div
      id="toast-success"
      class="flex items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
      role="alert"
      v-show="showToast"
    >
      <div
        class="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="sr-only">Check icon</span>
      </div>

      <div class="ml-3 text-sm font-normal">{{ toastMessage }}</div>
      <button
        type="button"
        class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        data-dismiss-target="#toast-success"
        aria-label="Close"
        @click="closeToast"
      >
        <span class="sr-only">Close</span>
        <svg
          aria-hidden="true"
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
    <!-- Toast End -->

    <div class="relative p-4 w-full max-w-5xl h-full md:h-auto">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow bg-gray-800">
        <!-- Modal header -->
        <div class="flex justify-end mx-3 pt-3">
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-toggle="defaultModal"
            @click="toggleUploadModal"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>

        <div
          class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600"
        >
          <div class="justify-center items-center w-full px-10">
            <p class="text-2xl font-semibold text-white mb-3 text-center">
              Choose a file to upload
            </p>

            <label
              for="dropzone-file"
              class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div class="flex flex-col justify-center items-center pt-5 pb-6">
                <svg
                  aria-hidden="true"
                  class="mb-3 w-10 h-10 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>

                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-semibold">Click to upload</span>
                </p>

                <p
                  class="text-lg text-gray-500 dark:text-gray-400"
                  v-if="productSheet?.name"
                >
                  {{ productSheet?.name }}
                </p>

                <p v-else class="text-xs text-gray-500 dark:text-gray-400">
                  XLSX, EXCEL, CSV
                </p>
              </div>

              <input
                id="dropzone-file"
                type="file"
                class="hidden"
                @change="onFileChange"
              />
            </label>

            <div class="my-5 mx-auto">
              <button
                class="mx-auto text-white font-semibold bg-yellow-500 px-8 py-3 rounded-lg"
                @click="uploadProductHandler"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { uploadProduct } from "@/api/products";

export default {
  name: "UploadForm",
  props: {
    showUploadModal: Boolean,
    toggleUploadModal: Function,
  },

  data() {
    return {
      productSheet: "",
      showToast: false,
      toastMessage: "",
    };
  },

  methods: {
    async uploadProductHandler() {
      const formData = new FormData();
      formData.append("file", this.productSheet);

      try {
        const { status, message } = await uploadProduct(formData);

        if (status === true) {
          this.showToast = !this.showToast;
          this.toastMessage = message;
        }
      } catch (error) {
        console.error(error);
      }
    },

    async onFileChange(e) {
      const file = e.target.files[0];
      this.productSheet = file;
    },

    closeToast() {
      this.showToast = !this.showToast
    }
  },
};
</script>
