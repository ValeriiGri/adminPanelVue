<template>
	<div>
	  <ul class="pagination">
	    <li class="page-item page-link" @click="changedPrev(value)">Previous</li>
	    <li class="page-item page-link" @click="changedNext(value)">Next</li>
	  </ul>
	</div>
</template>

<script>
	export default{
		name:'Paginator',
		model:{
			event:'click'
		},
		props:{
			value:{
				type:Number,
				required:true
			},
			totalUsersExpected:{
				type:Number,
				required:true
			},
			rowsPerPageExpected:{
				type:Number,
				required:true
			}
		},
		computed:{
			totalPages:function(){
				return Math.floor(this.totalUsersExpected/this.rowsPerPageExpected);
			}
		},
		methods:{
			changedPrev(value){
				if(value>=2){
					this.$emit('click',value-1)
				}
			},
			changedNext(value){
				if(value <= this.totalPages)
				this.$emit('click',value+1)
			}
		}
	}
</script>