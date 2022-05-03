// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
class Errors {
  constructor() {
    this.errors = {}
  }

  get(field) {
    if (this.errors[field]) {
      return this.errors[field][0]
    }
  }

  has(field){
    return this.errors.hasOwnProperty(field)
  }

  any(){
    return Object.keys(this.errors).length;
  }

  record(errors) {
    this.errors = errors
  }

  clear(field){
    delete this.errors[field]
  }
}

import Vue from 'vue'
import App from './App'
import axios from "axios";

Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({
  el: '#app', render: h => h(App)
})
