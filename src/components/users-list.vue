<template>
  <div>
    <users-per-page v-model.number="rowsCount"/></users-per-page>
    <table class="table">
      <thead class="thead-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Active</th>
          <th scope="col">Level</th>
          <th scope="col">Balance</th>
          <th scope="col">Age</th>
          <th scope="col">Gender</th>
          <th scope="col">E-mail</th>
          <th scope="col">Phone</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for = "item of usersFiltered" v-bind:key = item.id>
          <th scope="row">
            <router-link v-bind:to="`/users/${item.id}`">
              {{item.id}}
            </router-link>
          </th>
          <td>{{item.name}}</td>
          <td>{{item.isActive}}</td>
          <td>{{item.accessLevel}}</td>
          <td>{{item.balance}}</td>
          <td>{{item.age}}</td>
          <td>{{item.gender}}</td>
          <td>{{item.email}}</td>
          <td>{{item.phone}}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th colspan="8">
            Всего пользователей: {{ usersTotal }}
          </th>
        </tr>
      </tfoot>
    </table>
    <next-previous-page v-model="currentPage" :total-users-expected=this.usersTotal :rows-per-page-expected="rowsCount"></next-previous-page>
  </div>
</template>
    
<script>
  export default {
    name:'Users',
    props:{
      usersExpected:{
        type:Array,
        required:true
      }
    },
    components:{
      UsersPerPage:() => import('@/components/users-per-page.vue'),
      NextPreviousPage:() => import('@/components/paginator.vue') 
    },
    data:function(){
      return {
        rowsCount:10,
        currentPage:1
      }
    },
    computed:{
      usersTotal:function(){
        return this.usersExpected.length;
      },
      usersFiltered:function(){
        return this.usersExpected.filter((item,index)=>{
          return ((index < this.rowsCount*this.currentPage)&&(index >= this.rowsCount*(this.currentPage-1)))});
      }
    }  
  };
</script>