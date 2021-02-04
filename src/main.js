import Vue from 'vue'
import App from './App'
import store from './store'
import globleAjax from './ajax/ajax.js'
// 引入全局uView
import uView from 'uview-ui';

Vue.config.productionTip = false

App.mpType = 'app'

Vue.use(uView);
Vue.prototype.$ajax = globleAjax

const app = new Vue({
  store,
  ...App
})
app.$mount()
