import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/company",
      name: "company",
      component: () => import("../views/Company.vue"),
      children: [
        {
          path: "",
          name: "aboutUs",
          component: () => import("../components/Company/aboutUs.vue"),
        },
        {
          path: "/teammate",
          name: "teammate",
          component: () => import("../components/Company/teammate.vue"),
        },
        {
          path: "/vision",
          name: "vision",
          component: () => import("../components/Company/vision.vue"),
        },
      ],
    },
    {
      path: "/service",
      name: "service",
      component: () => import("../views/Service.vue"),
    },
    {
      path: "/projectPortfolio",
      name: "projectPortfolio",
      component: () => import("../views/ProjectPortfolio.vue"),
    },
    {
      path: "/news",
      name: "news",
      component: () => import("../views/News.vue"),
    },
    {
      path: "/contact",
      component: () => import("../views/Contact.vue"),
      children: [
        {
          path: "",
          name: "contact",
          component: () => import("../components/Contact/contact.vue"),
        },
        {
          path: "/joinus",
          name: "joinus",
          component: () => import("../components/Contact/joinUs.vue"),
        },
      ],
    },
  ],
});

export default router;
