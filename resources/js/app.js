require('./bootstrap');
/* require('alpinejs'); */
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';
window.axios = require("axios");
window.req = axios.create({
    baseURL : "/"
});

Vue.use(VueRouter)
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios';
/* window.Vue = require('vue').default; */
const router = new VueRouter ({
    linkExactActiveClass: 'active',
    routes,
    mode: 'history'
}) 
Vue.component('vue-welcome', require('./components/VueWelcome.vue').default);
Vue.component('vue-signin', require('./components/VueSignin.vue').default);
Vue.component('vue-signup', require('./components/VueSignup.vue').default);
Vue.component('vue-selection', require('./components/VueSelection.vue').default);
Vue.component('vue-intro', require('./components/VueIntro.vue').default);
Vue.component('vue-characters', require('./components/VueCharacters.vue').default);
Vue.component('vue-stages', require('./components/VueStages.vue').default);
Vue.component('vue-map', require('./components/VueMap.vue').default);
Vue.component('vue-app', require('./layouts/app.vue').default);
const app = new Vue ({
    router,
    el: "#app"
});
