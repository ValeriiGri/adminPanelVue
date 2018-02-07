<template>
  	<div v-if="!user" class = "text-center alert alert-primary ">
          Загрузка...
	</div>
	<form-for-edit v-else v-bind:user-expected ="user"></form-for-edit>
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
        },
        mounted: function(){
            this.getUser();
          }
      };
</script>

