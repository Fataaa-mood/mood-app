import VueWelcome from './components/VueWelcome.vue'
import VueSignin from './components/VueSignin.vue'


const routes =
            [
                {
                path: '/',
                name: 'VueWelcome',
                component: VueWelcome
                },
                {
                    path: '/signin',
                    name: 'VueSignin',
                    component: VueSignin
                }
            ];


export default routes;


