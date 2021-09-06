import VueWelcome from './components/VueWelcome.vue'
import VueSignin from './components/VueSignin.vue'
import VueSignup from './components/VueSignup.vue'
import VueIntro from './components/VueIntro.vue'
import VueCharacters from './components/VueCharacters.vue'
import VueSelection from './components/VueSelection.vue'
import VueMap from './components/VueMap.vue'
import VueMissionImp from './components/VueMissionImp.vue'
import VueMission from './components/VueMission.vue'

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
                path: '/signup',
                name: 'VueSignup',
                component: VueSignup
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
                },
                {
                path: '/map',
                name: 'VueMap',
                component: VueMap
                },
                {
                path: '/missionImp',
                name: 'VueMissionImp',
                component: VueMissionImp
                },
                {
                path: '/mission',
                name: 'VueMission',
                component: VueMission
                }
        ];


export default routes;