import Vue from 'vue'
import Router from 'vue-router'
import Hello from './pages/hello.vue'
import Users from './pages/usersList.vue'
import Edit from './pages/userEdit.vue'
import Add from './pages/userAdd.vue'


Vue.use(Router);

export default new Router({
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
      path: '/edit',
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

