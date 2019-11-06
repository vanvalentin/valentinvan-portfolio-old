import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueAnalytics from 'vue-analytics';


Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueAnalytics, {
  id: 'UA-151678250-1'
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
