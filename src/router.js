import Vue from 'vue'
import Router from 'vue-router'
import Hello from './pages/hello.vue'
import Users from './pages/usersListPage.vue'
import Edit from './pages/userEditPage.vue'
import Add from './pages/userAddPage.vue'


Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },  
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/edit/:id',
      name: 'Edit',
      component: Edit
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    }
  ]
});

