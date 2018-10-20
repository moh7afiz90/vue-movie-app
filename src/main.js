import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";

import VueRouter from "vue-router";
import { routes } from "./routes";

import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
