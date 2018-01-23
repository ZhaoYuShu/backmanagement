import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Register from '@/components/register'
import Index from '@/components/index'
import RegSuccess from '@/components/regSuccess'
import Item11 from '@/components/item1/item1-1'
import Item12 from '@/components/item1/item1-2'
import Item13 from '@/components/item1/item1-3'
import Item14 from '@/components/item1/item1-4'
import Item21 from '@/components/item2/item2-1'
import Item22 from '@/components/item2/item2-2'
import Item23 from '@/components/item2/item2-3'
import Item24 from '@/components/item2/item2-4'
import Item31 from '@/components/item3/item3-1'
import Item32 from '@/components/item3/item3-2'
import Item33 from '@/components/item3/item3-3'
import Item34 from '@/components/item3/item3-4'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [
        {
          path: '1-1',
          name: 'item1-1',
          components: {
            views: Item11
          }
        },
        {
          path: '1-2',
          name: 'item1-2',
          components: {
            views: Item12
          }
        },
        {
          path: '1-3',
          name: 'item1-3',
          components: {
            views: Item13
          }
        },
        {
          path: '1-4',
          name: 'item1-4',
          components: {
            views: Item14
          }
        },
        {
          path: '2-1',
          name: 'item2-1',
          components: {
            views: Item21
          }
        },
        {
          path: '2-2',
          name: 'item2-2',
          components: {
            views: Item22
          }
        },
        {
          path: '2-3',
          name: 'item2-3',
          components: {
            views: Item23
          }
        },
        {
          path: '2-4',
          name: 'item2-4',
          components: {
            views: Item24
          }
        },
        {
          path: '3-1',
          name: 'item3-1',
          components: {
            views: Item31
          }
        },
        {
          path: '3-2',
          name: 'item3-2',
          components: {
            views: Item32
          }
        },
        {
          path: '3-3',
          name: 'item3-3',
          components: {
            views: Item33
          }
        },
        {
          path: '3-4',
          name: 'item3-4',
          components: {
            views: Item34
          }
        }
      ]
    },
    {
      path: '/regSuccess',
      name: 'reg-success',
      component: RegSuccess
    }
  ]
})
