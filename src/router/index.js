import Vue from 'vue'
import Router from 'vue-router'
import blog from '../components/blog'
import about from '../components/about'
import contact from '../components/contact'
import vue from '../components/vue'
import css from '../components/css'
import javascript from '../components/javascript'
import node from '../components/node'
import details from '../components/details'
import login from '../components/login'
import register from '../components/register'
import search from '../components/search'
import error from '../components/error'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog,
      redirect: '/blog/vue',
      children: [
        {
          path: '/blog/vue',
          name: 'vue',
          component: vue,
          meta: {
            keepAlive: true
          }
        },
        {
          path: '/blog/vue/:id',
          component: details,
        },
        {
          path: '/blog/css',
          name: 'css',
          component: css,
          meta: {
            keepAlive: true
          }
        },
        {
          path: '/blog/css/:id',
          component: details,
        },
        {
          path: '/blog/javascript',
          name: 'javascript',
          component: javascript,
          meta: {
            keepAlive: true
          }
        },
        {
          path: '/blog/javascript/:id',
          component: details,
        },
        {
          path: '/blog/node',
          name: 'node',
          component: node,
          meta: {
            keepAlive: false
          }
        },
        {
          path: '/blog/node/:id',
          component: details,
        },
        {
          path: '/blog/search',
          name: 'search',
          component: search,
          meta: {
            keepAlive: true
          }
        },
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/login',
      name:'/login',
      component:login
    },
    {
      path: '/register',
      name:'/register',
      component:register
    },
    {
      path: '/error',
      name:'error',
      component:error
    }
  ],
})
