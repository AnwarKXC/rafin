import { createRouter, createWebHistory } from "vue-router"
import Home from '/src/views/Home.vue'
import Contact from '/src/views/Contact.vue'
import About from '/src/views/About.vue'
import Blog from '/src/views/Blog.vue'

const router = createRouter( {
  history: createWebHistory( import.meta.env.BASE_URL ),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "Home",
      },
    },
    {
      path: "/contact-us",
      name: "contact",
      component: Contact,
      meta: {
        title: "Contact us",
      },
    },
    {
      path: "/about-us",
      name: "about",
      component: About,
      meta: {
        title: "About us",
      },
    },
    {
      path: "/blog",
      name: "blog",
      component: Blog,
      meta: {
        title: "Blog",
      },
    },
  ],
} )

export default router
