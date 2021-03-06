import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
  },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
    {
        path: '/portfolio',
        name: 'Portfolio',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "portfolio" */ '../views/Portfolio.vue')
  },
    {
        path: '/contact',
        name: 'Contact',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
    {
        path: '/career',
        name: 'Career',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "career" */ '../views/Career.vue')
  },
    {
        path: '/coming-soon',
        name: 'ComingSoon',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "career" */ '../views/ComingSoon.vue')
  },
    {
        path: '/faq',
        name: 'Faq',
        // route level code-splitting
        // this generates a separate chunk (faq.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "career" */ '../views/Faq.vue')
  },
    {
        path: '/pricing',
        name: 'Pricing',
        // route level code-splitting
        // this generates a separate chunk (faq.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "pricing" */ '../views/Pricing.vue')
  },
    {
        path: '/service',
        name: 'Service',
        // route level code-splitting
        // this generates a separate chunk (faq.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "service" */ '../views/Service.vue')
  },
    {
        path: '/testimonial',
        name: 'Testimonial',
        // route level code-splitting
        // this generates a separate chunk (faq.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "testimonial" */ '../views/Testimonial.vue')
  },
    {
        path: '/post',
        name: 'Post',
        // route level code-splitting
        // this generates a separate chunk (faq.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "post" */ '../views/Post.vue')
  },
    {
        path: '/create-post',
        name: 'CreatePost',
        // route level code-splitting
        // this generates a separate chunk (faq.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "create-post" */ '../views/CreatePost.vue')
  }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
