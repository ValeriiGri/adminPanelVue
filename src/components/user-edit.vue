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
      <label>Registration date</label>
      <input type="text" class="form-control" v-model="userExpected.regDate">
      <datepicker v-model="userExpected.regDate"/>
    </div>

    <div class="form-group">
      <label>Age</label>
      <input type="number" class="form-control" v-model.number="userExpected.age">
    </div>
    <div class="form-group">
      <label>Avatar</label>

      <img :src="userExpected.avatar">

      <input type="file" ref="avatar" class="invisible" @change="upload">
      <button type="button" class="btn btn-primary" @click="selectNewAvatar">
        Выбрать новую
      </button>

      <input type="text" class="form-control" v-model="userExpected.avatar">
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
        <input type="checkbox" v-model="userExpected.isActive"> Да
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
      components:{
        datepicker:() => import('@/components/datepicker.vue')
      },
      data:() =>({
        accessList:['user','guest','admin'],
        genderList:['male','female']
      }),
      methods:{
        //Show browse window
        selectNewAvatar:function(){
          this.$refs.avatar.click();
        },
        upload:function() {
          const url = 'https://api.imgur.com/3/image';
          const data = new FormData();
        
          data.append('image',this.$refs.avatar.files[0]);

          let file = data.get('image');
          let self = this;

          let xhr = new XMLHttpRequest();

            xhr.addEventListener('readystatechange',function() {
              if (xhr.readyState !== 4 || xhr.status !== 200){
                return;
              }

              const resp = JSON.parse(xhr.response);

              self.userExpected.avatar = resp.data.link;
              self.$refs.avatar.value = '';

            });

          xhr.open("POST", url, true);
          xhr.setRequestHeader('Content-type','multipart/form-data');
          xhr.setRequestHeader('Authorization', 'Client-ID cc2383c189b2a3d');
          xhr.send(file);
        }
      }
    };
</script>