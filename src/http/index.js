import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8888/api/private/v1'

// 拦截器,必须有return
// 请求拦截器,每次发送请求都在请求头找那个携带token用户信息
axios.interceptors.request.use(config => {
  config.headers.Authorization = sessionStorage.getItem('token')
  return config
})

// 响应拦截器,校验相应之后,用户信息是否还有效,如果响应回来的数据中的status的值为401的话,表示用户信息的token时效,则需要重新登录,由于此处没有vue实例,所以无法使用this.$router.push,只能是用location.href强制更改访问地址为登录页
axios.interceptors.response.use(res => {
  if (res.data.meta.status === 401) {
    location.href = '#/login'
  } else {
    return res
  }
})

export default axios
