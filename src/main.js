// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import axios from 'axios'
import jq from 'jquery'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import VueDND from 'awe-dnd'
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$jq = jq
Vue.use(VueDND)
Vue.use(Vuex)
/* eslint-disable no-new */

const store = new Vuex.Store({
  state: {
    myList: [{
      'id': 1,
      'name': '组件1',
      'x': 1,
      'y': 1,
      'sizex': 5,
      'sizey': 2,
      'component': 'zj1',
      'isshow': true
    }, {
      'id': 2,
      'name': '组件2',
      'x': 6,
      'y': 1,
      'sizex': 5,
      'sizey': 2,
      'component': 'zj2',
      'isshow': true
    }, {
      'id': 3,
      'name': '组件3',
      'x': 1,
      'y': 2,
      'sizex': 5,
      'sizey': 2,
      'component': 'zj3',
      'isshow': true
    }, {
      'id': 4,
      'name': '组件4',
      'x': 6,
      'y': 1,
      'sizex': 5,
      'sizey': 2,
      'component': 'zj4',
      'isshow': true
    }]
  },
  getters: {
    showList: state => {
      return state.myList.filter(todo => todo.isshow)
    },
    controlList: state => {
      return state.myList
    }
  },
  mutations: {
    updateMessage (state, message) {
      state.myList = message
    }
  }
})

new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>'
})
