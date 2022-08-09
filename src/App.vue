<template>
  <div id="app">
    <Main />
    <router-view />
  </div>
</template>

<script>
import Main from "./layout/Main.vue";

export default {
  name: "App",
  components: {
    Main,
  },
};
</script>
