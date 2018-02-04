<template>
  	<div v-if="!user" class = "text-center alert alert-primary ">
          Загрузка...
	</div>
	<form-for-edit v-else v-bind:user-expected ="user"></form-for-edit>
</template>

<script>
	import userEdit from '@/components/user-edit.vue'

	export default {
        name:'EditUser',
        components:{
          'form-for-edit': userEdit
        },
        data:function(){
          return {
            user:null
          };
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

              self.user = data['usersList'][0];
            });

            xhr.open('GET', 'users.json', true);
            xhr.send(); 
          },
        },
        mounted: function(){
            this.getUser();
          }
      };
</script>

