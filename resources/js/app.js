require('./bootstrap');

require('alpinejs');

window.Vue = require('vue').default;

Vue.component('vue-example-name', require('./components/VueExample.vue').default);

Vue.component('vue-selection', require('./components/VueSelection.vue').default);

Vue.component('vue-intro', require('./components/VueIntro.vue').default);

Vue.component('vue-characters', require('./components/VueCharacters.vue').default);

Vue.component('vue-stages', require('./components/VueStages.vue').default);

const app = new Vue ({
    el: '#app'
});

