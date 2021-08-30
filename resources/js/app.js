require('./bootstrap');

/* require('alpinejs'); */
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';


Vue.use(VueRouter)

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


/* window.Vue = require('vue').default; */


import VueWelcome from './components/VueWelcome.vue'

const router = new VueRouter ({
    linkExactActiveClass: 'active',
    routes,
    mode: 'history'
}) 


Vue.component('vue-welcome', require('./components/VueWelcome.vue').default);

Vue.component('vue-signin', require('./components/VueSignin.vue').default);

Vue.component('vue-selection', require('./components/VueSelection.vue').default);

Vue.component('vue-intro', require('./components/VueIntro.vue').default);

Vue.component('vue-characters', require('./components/VueCharacters.vue').default);

Vue.component('vue-stages', require('./components/VueStages.vue').default);

Vue.component('vue-app', require('./layouts/app.vue').default);

const app = new Vue ({
    router,
    el: "#app"
});



