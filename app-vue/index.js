import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'

Vue.use(VueRouter); 
const router = new VueRouter({}); 

new Vue({
    el: '#app',
    router,
    // store,
    render: h => h(App),
  });