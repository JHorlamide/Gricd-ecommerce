<template>
  <div class="w-full">
    <label class="flex items-center justify-center space-x-5 mb-5">
      <gmap-autocomplete
        class="bg-gray-50 border border-gray-300 text-dark-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
        @place_changed="initMarker"
      ></gmap-autocomplete>
      <button
        @click="addLocationMarker"
        class="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-base w-full sm:w-auto px-6 py-5 text-center"
      >
        Search
      </button>
    </label>

    <gmap-map :zoom="14" :center="center" style="width:100%;  height: 500px;">
      <gmap-marker
        :key="index"
        v-for="(m, index) in locationMarkers"
        :position="m.position"
        @click="center = m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "AddGoogleMap",
  data() {
    return {
      center: {
        lat: 0,
        lng: 0,
      },
      locationMarkers: [],
      locPlaces: [],
      existingPlace: null,
    };
  },

  mounted() {
    this.locateGeoLocation();
  },

  methods: {
    initMarker(loc) {
      this.existingPlace = loc;
    },

    addLocationMarker() {
      if (this.existingPlace) {
        const marker = {
          lat: this.existingPlace.geometry.location.lat(),
          lng: this.existingPlace.geometry.location.lng(),
        };

        this.locationMarkers.push({ position: marker });
        this.locPlaces.push(this.existingPlace);
        this.center = marker;
        this.existingPlace = null;
      }
    },

    locateGeoLocation: function () {
      navigator.geolocation.getCurrentPosition((res) => {
        this.center = {
          lat: res.coords.latitude,
          lng: res.coords.longitude,
        };
      });
    },
  },
};
</script>
