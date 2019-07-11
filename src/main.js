import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

axios.defaults.baseURL =
  "https://cors-anywhere.herokuapp.com/https://www.bitstamp.net/api/v2";
axios.defaults.headers.common = {
  "Access-Control-Allow-Headers": "origin"
};

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
