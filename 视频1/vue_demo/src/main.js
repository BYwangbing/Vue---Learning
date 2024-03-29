import Vue from 'vue'
import App from './app'
import router from './router/router'

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    components: { App },
    template: '<App/>',
    router
});
