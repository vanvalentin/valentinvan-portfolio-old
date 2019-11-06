import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueAnalytics from 'vue-analytics';

const isProd = process.env.NODE_ENV === 'production';


Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueAnalytics, {
  id: 'UA-151678250-1',
  router,
  debug: {
    enabled: !isProd,
    sendHitTask: isProd
  }
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
