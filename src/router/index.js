import Vue from 'vue'
import Router from 'vue-router'
import erpmain from '@/page/erpmain'
import home from '@/page/main'
import cgdd from '@/page/cgdd'
import cgkd from '@/page/cgkd'
import xskd from '@/page/xskd'
import xsdd from '@/page/xsdd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children:[
      	{
	      path: '/erpmain',
	      name: 'erpmain',
	      component: erpmain
	    },
	    {
	      path: '/cgdd',
	      name: 'cgdd',
	      component: cgdd
	    },
	    {
	      path: '/cgkd',
	      name: 'cgkd',
	      component: cgkd
	    },
	    {
	      path: '/xskd',
	      name: 'xskd',
	      component: xskd
	    },
	    {
	      path: '/xsdd',
	      name: 'xsdd',
	      component: xsdd
	    },
      ]
    },
  ]
})
