import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import(/* webpackChunkName: "index" */ './views/index.vue')
    },
    {
      path: '/jlLogin',

      name: 'jlLogin',
      component: () => import(/* webpackChunkName: "jlLogin" */ './views/jlLogin.vue')

    },
    {
      path: '/login',

      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/login.vue')

    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "register" */ './views/register.vue')
    },
    {
      path: '/bangdan',
      name: 'bangdan',
      component: () => import(/* webpackChunkName: "bangdan" */ './views/bangdan.vue')
    },{
      path: '/newsonge',
      name: 'newsonge',
      component: () => import(/* webpackChunkName: "newsonge" */ './views/newsonge.vue')
    },{
      path: '/selected',
      name: 'selected',
      component: () => import(/* webpackChunkName: "selected" */ './views/selected.vue')
    },{
      path: '/songlist',
      name: 'songlist',
      component: () => import(/* webpackChunkName: "songlist" */ './views/songlist.vue')
    },{
      path: '/songer',
      name: 'songer',
      component: () => import(/* webpackChunkName: "songer" */ './views/songer.vue')
    } ,{
      path: '/cs',
      name: 'cs',
      component: () => import(/* webpackChunkName: "cs" */ './views/cs.vue')
    } 
    ,{
      path: '/cs1',
      name: 'cs1',
      component: () => import(/* webpackChunkName: "cs1" */ './views/cs1.vue')
    } ,{
      path: '/mysonglist',
      name: 'mysonglist',
      component: () => import(/* webpackChunkName: "mysonglist" */ './views/mysonglist.vue')
    }
  ]
})
