require('./bootstrap');

window.Vue = require('vue');

Vue.component('meus-pensamentos-component', require('./components/MeusPensamentosComponent.vue').default);
Vue.component('form-component', require('./components/FormComponent.vue').default);
Vue.component('pensamento-component', require('./components/PensamentoComponent.vue').default);

const app = new Vue({
    el: '#app',
});
