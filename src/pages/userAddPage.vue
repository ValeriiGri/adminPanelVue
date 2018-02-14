<template>
	<div>
		<form-for-add v-model="newUser"></form-for-add>
		<button type="button" class="btn btn-success" @click="add">
			Add
		</button>
	</div>
</template>

<script>

	export default {
      name:'AddUser',
      components:{
        FormForAdd: () => import ('@/components/user-add.vue')
      },
      data:function(){
        return {
          newUser:{
          	id:null
          },
          url:'http://localhost:3000/usersList'
        };
      },
  		methods: {
      	add: function(){
      		let xhr = new XMLHttpRequest();

    			xhr.open("POST", this.url, true);
    			xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    			xhr.send(JSON.stringify(this.newUser));
    			this.$router.push('/users');
        }
      }
  };
</script>