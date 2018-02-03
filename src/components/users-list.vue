<template>
  <table class="table">
    <thead class="thead-light">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Active</th>
        <th scope="col">Balance</th>
        <th scope="col">Age</th>
        <th scope="col">Gender</th>
        <th scope="col">E-mail</th>
        <th scope="col">Phone</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for = "item of usersExpected" v-bind:key = item.num>
        <th scope="row">{{item.id}}</th>
        <td>{{item.name}}</td>
        <td>{{item.isActive}}</td>
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
    computed:{
      usersTotal:function(){
        return this.usersExpected.length;
      }
    }
  };
</script>