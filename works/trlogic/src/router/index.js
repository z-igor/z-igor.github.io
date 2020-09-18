import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    meta: {
      layout: "main"
    },
    component: Home
  },
  {
    path: "/contacts/",
    name: "contacts",
    meta: {
      layout: "main"
    },
    component: () => import("../views/Contacts.vue")
  },
  {
    path: "/contacts/:id",
    name: "contact",
    meta: {
      layout: "main"
    },
    component: () => import("../views/Contact.vue")
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
