import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./index.css"
import store from './store'
import VueGeolocation from 'vue-browser-geolocation';
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false;
Vue.use(VueGeolocation);
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_MAP_API_KEY_FIRST,
    libraries: 'places',
  },
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
