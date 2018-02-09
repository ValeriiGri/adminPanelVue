<template>
	<div>
	  	<div v-if="!user" class = "text-center alert alert-primary ">
	          Загрузка...
		</div>
		<form-for-edit v-else v-model="user"></form-for-edit>
		<button type="button" class="btn btn-success" @click="save">
			Save
		</button>
		<button type="button" class="btn btn-danger" @click="remove">
			Delete
		</button>
	</div>
</template>

<script>

	export default {
        name:'EditUser',
        components:{
          FormForEdit: () => import ('@/components/user-edit.vue')
        },
        data:function(){
          return {
            user:null
          };
        },
        computed:{
        	getId:function(){
            	return this.$route.params.id;
            }
        },
        methods: {
			getUser: function(){
				let xhr = new XMLHttpRequest();

				let self = this;

				xhr.addEventListener('readystatechange',function(event) {
					if (xhr.readyState !== 4 || xhr.status !== 200){
						return;
					}

					const data =  JSON.parse(xhr.responseText);

					self.user = data[self.getId-1];
				});

				xhr.open('GET', 'http://localhost:3000/usersList', true);
				xhr.send(); 
			},

			save: function(){

				let xhr = new XMLHttpRequest();

				xhr.open("PUT", `http://localhost:3000/usersList/${this.getId}`, true);
				xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
				xhr.send(JSON.stringify(this.user));
				this.$router.push('/users');
			},

			remove: function(){

				let xhr = new XMLHttpRequest();

				xhr.open("DELETE", `http://localhost:3000/usersList/${this.getId}`);
				xhr.send();
				this.$router.push('/users');
			}
        },
        mounted: function(){
            this.getUser();
          }
      };
</script>

