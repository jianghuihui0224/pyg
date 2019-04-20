import Vue from 'vue'
import App from './App'
import router from './router'

// 引入全局css样式
import './assets/css/global.css'

// 引入图标文件
import './assets/fonts/iconfont.css'

// 引入element-ui组件库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI, {size: 'small'})

Vue.config.productionTip = false

// 作用:入口文件的作用是引入依赖的文件
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
