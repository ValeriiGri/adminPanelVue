<template>
  <div class="font-weight-bold">
    <div class="form-group">
      <label>Name</label>
      <input type="text" class="form-control" v-model="userExpected.name">
    </div>
    <div class="form-group">
      <label>Email</label>
      <input type="text" class="form-control" v-model="userExpected.email">
    </div>
    <div class="form-group">
      <label>Balance</label>
      <input type="text" class="form-control" v-model="userExpected.balance">
    </div>
    <div class="form-group">
      <label>Phone</label>
      <input type="text" class="form-control" v-model="userExpected.phone">
    </div>
    <div class="form-group">
      <label>Age</label>
      <input type="number" class="form-control" v-model.number="userExpected.age">
    </div>
    <div class="form-group">
      <label>Gender</label>
      <select class="form-control" v-model="userExpected.gender">
        <option v-for="item of genderList" :key="item">
          {{ item }}
        </option>
      </select>
    </div>
    <div class="form-group">
      <label>Активный</label>
      <div class="checkbox-inline">
        <input type="checkbox" v-model="userExpected.isActive" /> Да
      </div>
    </div>
    <div class="form-group">
      <label>Уровень доступа</label>
      <select class="form-control" v-model="userExpected.accessLevel">
        <option v-for="item of accessList" :key="item">
          {{ item }}
        </option>
      </select>
    </div>

    <pre>{{userExpected}}</pre>
  </div>
</template>
    

<script>
    export default {
      name:'Edit',
      model:{
        prop:'userExpected'//меняем value(по умолчанию у v-model) на userExpected,чтобы не писать везде value.prop 
      },
      props:{
        userExpected:{  //ожидаем userExpected, а не value сверху(из <form-for-edit v-else v-model="user"></form-for-edit>)
          type:Object,
          required:true
        }
      },
      data:() =>({
        accessList:['user','guest','admin'],
        genderList:['male','female']
      })
    };
</script>