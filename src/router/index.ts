import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "landing",
      component: () => import("@/views/landing_view/LandingView.vue")
    },
    {
      path: "/pokemon",
      name: "pokemon",
      component: () => import("@/views/pokemon_view/PokemonView.vue")
    },
    {
      path: "/temtem",
      name: "temtem",
      component: () => import("@/views/temtem_view/TemtemView.vue")
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("@/views/not_found_view/NotFoundView.vue")
    }
  ]
});
