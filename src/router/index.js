import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})

// 判断用户是否登录,利用的是router中的beforeEach方法,叫做导航守卫
router.beforeEach((to, from, next) => {
  // 判断如果是要去登录页,就next(),放行
  if (to.path === '/login') return next()
  // 判断用户信息是否存在,如果不存在,就next('/login),强行修改访问的路径为登录页
  if (!sessionStorage.getItem('token')) return next('/login')
  // 剩下的情况都是已登录状态,直接next(),放行
  next()
})

export default router
