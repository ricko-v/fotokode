const routes = [
  {
      path: path,
      component: home
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

const app = new Vue({
  router
}).$mount('#app')
