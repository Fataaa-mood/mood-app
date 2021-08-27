import Vue from 'vue'
import VueRouter from 'vue-router'
import VueSignin from './components/VueSignin.vue'

Vue.use(VueRouter)

const router = new Router ({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
                {
                path: '/signin',
                name: 'VueSignin',
                component: VueSignin
                }
            ]
});


export default router;


