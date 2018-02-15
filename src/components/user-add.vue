<template>
  <div class="font-weight-bold">
    <div class="form-group">
      <label>Name</label>
      <input type="text" class="form-control" v-model="newUser.name">
    </div>
    <div class="form-group">
      <label>Email</label>
      <input type="text" class="form-control" v-model="newUser.email">
    </div>
    <div class="form-group">
      <label>Balance</label>
      <input type="text" class="form-control" v-model="newUser.balance">
    </div>
    <div class="form-group">
      <label>Phone</label>
      <input type="text" class="form-control" v-model="newUser.phone">
    </div>
    <div class="form-group">
      <label>Registration date</label>
      <input type="text" class="form-control" v-model="newUser.regDate">
    </div>
    <div class="form-group">
      <label>Age</label>
      <input type="number" class="form-control" v-model.number="newUser.age">
    </div>
    <div class="form-group">
      <label>Gender</label>
      <select class="form-control" v-model="newUser.gender">
        <option v-for="item of genderList" :key="item">
          {{ item }}
        </option>
      </select>
    </div>
    <div class="form-group">
      <label>Активный</label>
      <div class="checkbox-inline">
        <input type="checkbox" v-model="newUser.isActive" /> Да
      </div>
    </div>
    <div class="form-group">
      <label>Уровень доступа</label>
      <select class="form-control" v-model="newUser.accessLevel">
        <option v-for="item of accessList" :key="item">
          {{ item }}
        </option>
      </select>
    </div>

    <pre>{{newUser}}</pre>
  </div>
</template>
    

<script>
    export default {
      name:'Add',
      model:{
        prop:'newUser'//меняем value(по умолчанию у v-model) на newUser,чтобы не писать везде value.prop 
      },
      props:{
        newUser:{  //ожидаем newUser, а не value сверху(из <form-for-add v-else v-model="newUser"></form-for-add>)
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