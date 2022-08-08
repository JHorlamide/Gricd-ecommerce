<template>
  <div class="flex justify-center items-center my-3 flex-col space-y-5">
    <div class="flex justify-center items-center my-10">
      <h1>Your coordinates:</h1>
      <p class="text-base font-lg">{{ coordinates.lat }} Latitude, {{ coordinates.lng }} Longitude</p>
    </div>

    <GmapMap
      :center="{ lat: 10, lng: 10 }"
      :zoom="7"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
    >
      <!-- <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      /> -->
    </GmapMap>
  </div>
</template>

<script>
export default {
  name: "MapComponent",
  data() {
    return {
      coordinates: {
        lat: 0,
        lng: 0,
      },
    };
  },

  created() {
    //  get users' coordinates from the browser request
    this.$getLocation({})
      .then((coordinates) => {
        this.coordinates = coordinates;
      })
      .catch((error) => alert(error.message));
  },
};
</script>

<style lang="scss" scoped></style>
