  import Vue from 'vue'
  import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode:'history',
  linkActiveClass:'active',
  routes: [
    {
      path: '/home',
      name: 'Hello',
      component: () => import ('./pages/hello.vue')
    },  
    {
      path: '/users',
      name: 'Users',
      component: () => import ('./pages/usersListPage.vue')
    },
    {
      path: '/users/:id',
      name: 'Edit',
      component: () => import ('./pages/userEditPage.vue')
    },
    {
      path: '/add',
      name: 'Add',
      component: () => import ('./pages/userAddPage.vue')
    }
  ]
});

