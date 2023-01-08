import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductShayna from '../views/ProductShayna.vue'
import CartDetail from '../views/CartDetail.vue'
import SuksesDetail from '../views/SuksesDetail.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/product',
        name: 'product',
        component: ProductShayna
    },
    {
        path: '/cart-detail',
        name: 'cart-detail',
        component: CartDetail
    },
    {
        path: '/sukses-detail',
        name: 'sukses-detail',
        component: SuksesDetail
    },

]

const router = new VueRouter({

    routes
})

export default router