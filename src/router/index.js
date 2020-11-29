import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "@/views/Login";
import store from "@/store";
import Register from "@/views/Register";

Vue.use(VueRouter)

let checkAuth = (to, from, next) => {
    if (to.name !== 'Login' && !store.state.user.isAuthenticated) next({name: 'Login'})
    else next()
}


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        beforeEnter: checkAuth
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Login' && !store.state.user.isAuthenticated) next({ name: 'Login' })
//   else next()
// })

export default router
