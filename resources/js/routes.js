import VueWelcome from './components/VueWelcome.vue'
import VueSignin from './components/VueSignin.vue'
import VueIntro from './components/VueIntro.vue'
import VueCharacters from './components/VueCharacters.vue'
import VueSelection from './components/VueSelection.vue'


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
                },
                {
                path: '/intro',
                name: 'VueIntro',
                component: VueIntro
                },
                {
                path: '/characters',
                name: 'VueCharacters',
                component: VueCharacters
                },
                {
                path: '/selection',
                name: 'VueSelection',
                component: VueSelection
                }
            ];


export default routes;


