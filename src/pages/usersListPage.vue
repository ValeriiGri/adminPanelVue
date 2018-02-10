<template>
    <div v-if="!haveUsers" class="text-center alert alert-primary ">
            Загрузка...
    </div>
    <list-of-users v-else v-bind:users-expected="users"></list-of-users>
</template>

<script>

  	export default {
    		name: 'usersList',
    		components:{
              ListOfUsers: () => import ('@/components/users-list.vue')
            },
        data:function(){
          return {
            users:[],
            url:'http://localhost:3000/usersList'
          };
        },
        computed:{
          haveUsers:function(){
            return this.users.length > 0;
          }
        },
        methods:{
          getData:function(){
            let xhr = new XMLHttpRequest();

            let self = this;

            xhr.addEventListener('readystatechange',function(event) {
              if (xhr.readyState !== 4 || xhr.status !== 200){
                return;
              }

              const data =  JSON.parse(xhr.responseText);

              self.users = data;
            });

            xhr.open('GET',this.url , true);
            xhr.send(); 
          }
        },
        mounted: function(){
          this.getData();
        }
	 }
</script>


