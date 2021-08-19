require('./bootstrap');

require('alpinejs');

window.Vue = require('vue').default;

Vue.component('vue-example-name', require('./components/VueExample.vue').default);

Vue.component('vue-selection', require('./components/VueSelection.vue').default);

const app = new Vue ({
    el: '#app'
});

