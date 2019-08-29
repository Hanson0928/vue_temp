import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routers= new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/components/home'], resolve),
    },
    
  ]
})

// routers.beforeEach((to, from, next) => {
//   if (to.path == "/") {
//     if (location.search.indexOf("shouye") != -1) {
//       next({
//         path: '/shouye'
//       })
//     } else if (location.search.indexOf("goods") != -1) {
//       next({
//         path: '/goods'
//       })
//     } else if (location.search.indexOf("show") != -1) {
//       next({
//         path: '/show'
//       })
//     } else {
//       next()
//     }
//   } else {
//     next();
//   }
// })
export default routers
