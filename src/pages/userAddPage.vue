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
            	id:this.userId
            }
          };
        },
        computed:{
        	userId:function(){
            	return this.getData();
            }
        },
        methods: {
			getData:function(){
	            let xhr = new XMLHttpRequest();

	            let self = this;
	            let amount; 

	            xhr.addEventListener('readystatechange',function(event) {
	              if (xhr.readyState !== 4 || xhr.status !== 200){
	                return;
	              }

	              const data =  JSON.parse(xhr.responseText);
	              amount = data.length;
	            });

	            xhr.open('GET', 'http://localhost:3000/usersList', true);
	            xhr.send(); 

	            return amount;
          	},

          	add: function(){
          		let xhr = new XMLHttpRequest();

				xhr.open("POST", `http://localhost:3000/usersList/`, true);
				xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
				xhr.send(JSON.stringify(this.newUser));
				this.$router.push('/users');
          	}
        }
    };
</script>