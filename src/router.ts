import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Web from "./views/Web.vue";
import Graphic from "./views/Graphic.vue";
import Sql from "./views/Sql.vue";
import Coding from "./views/Coding.vue";
import Game from "./views/Game.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/web",
      name: "web",
      component: Web,
    },
    {
      path: "/graphic",
      name: "graphic",
      component: Graphic,
    },
    {
      path: "/sql",
      name: "sql",
      component: Sql,
    },
    {
      path: "/coding",
      name: "coding",
      component: Coding,
    },
    {
      path: "/game",
      name: "game",
      component: Game,
    },
  ],
});
