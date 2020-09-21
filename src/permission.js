import router from './router'
import store from './store'
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css' // 进度条样式
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login', '/403', '/404'] // 路由白名单

router.beforeEach(async(to, from, next) => {
  // 开启进度条
  NProgress.start()

  // 设置页面title
  document.title = getPageTitle(to.meta.title)
  if (whiteList.includes(to.path)) {
    return next()
  } else if (store.getters.permission_routes.length === 0) {
    const accessRoutes = await store.dispatch('permission/generateRoutes')
    // 动态添加可访问路由
    router.addRoutes(accessRoutes)
    // 确保addRoutes完整的hack方法
    // 设置replace:true，这样导航就不会留下历史记录
    return next({ ...to, replace: true })
  } else {
    next()
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
