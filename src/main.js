import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import store from "./store"; // store/index.js
import AuthHandler from "./components/AuthHandler";
import ImageList from "./components/ImageList.vue";
import UploadForm from "./components/UploadForm.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: ImageList },
    { path: "/upload", component: UploadForm },
    { path: "/oauth2/callback", component: AuthHandler }
  ]
});

new Vue({
  router,
  store, // shorthand for => store: store
  render: h => h(App)
}).$mount("#app");
