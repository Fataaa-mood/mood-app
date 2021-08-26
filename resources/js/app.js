require('./bootstrap');

require('alpinejs');
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';
import Vue from 'vue';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

window.Vue = require('vue').default;

Vue.component('vue-welcome', require('./components/VueWelcome.vue').default);

Vue.component('vue-signin', require('./components/VueSignin.vue').default);

Vue.component('vue-signup', require('./components/VueSignup.vue').default);

Vue.component('vue-selection', require('./components/VueSelection.vue').default);

Vue.component('vue-intro', require('./components/VueIntro.vue').default);

Vue.component('vue-characters', require('./components/VueCharacters.vue').default);

Vue.component('vue-stages', require('./components/VueStages.vue').default);

const app = new Vue ({
    el: '#app'
});

