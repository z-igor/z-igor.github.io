import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "./icons";
import router from "./router";
import store from "./store";
import undo from "./mixins/";
import tableHeader from "./filters/filters";

Vue.config.productionTip = false;

Vue.mixin("Undo", undo);
Vue.filter("headers", tableHeader);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
