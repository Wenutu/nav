import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Index from "./views/index.vue";

//import "./assets/css/fonts/linecons/css/linecons.css";
//import "./assets/css/fonts/fontawesome/css/font-awesome.min.css";
import "./assets/css/fonts/fontawesome-6.3.0/css/all.min.css";
import "./assets/css/bootstrap.css";
import "./assets/css/xenon-core.css";
import "./assets/css/xenon-components.css";
import "./assets/css/xenon-skins.css";
import "./assets/css/nav.css";
import "./assets/css/searchbox.css";

Vue.config.productionTip = false;
Vue.use(VueRouter);

// 主导航和次级导航
const routes = [
  { path: "/", component: Index, props: castRouteParams("main") },
  { path: "/code", component: Index, props: castRouteParams("code") },
  //{ path: "/design", component: Index, props: castRouteParams("design") },
];
function castRouteParams(type) {
  return {
    sites: String(type),
  };
}

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  render: (h) => h(App),
  router
}).$mount("#app");
