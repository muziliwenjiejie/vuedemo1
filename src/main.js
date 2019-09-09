import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores'
// 配置element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false
Vue.use(ElementUI);
// 导航守卫
// router.beforeEach((to, from, next) => {
//   // console.log(store.state,"store.state")
//   if (store.state.userInfo || to.path === '/login'){
//     next()
//   } else {
//     next(
//       {path:'/login'}
//     )
//   }
//
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
