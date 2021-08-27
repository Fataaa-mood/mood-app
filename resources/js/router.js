import VueWelcome from './components/VueWelcome.vue'


const routes = {
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
                {
                path: '/',
                name: 'VueWelcome',
                component: VueWelcome
                }
            ]
};


export default routes;


