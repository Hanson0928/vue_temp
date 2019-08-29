// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import core from "@/core/core.config"

import "lib-flexible/flexible"

import "font-awesome/css/font-awesome.css"

import store from "@/core/store"
import { Lazyload } from 'mint-ui';

Vue.use(Lazyload);
Vue.use(core)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
