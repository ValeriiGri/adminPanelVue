<template>
	<div>
	  <ul class="pagination">
	    <li class="page-item page-link" :value="value" @click="changedPrev($event.target.value)">Previous</li>
	    <li class="page-item page-link" :value="value" @click="changedNext($event.target.value)">Next</li>
	  </ul>
	</div>
</template>

<script>
	export default{
		name:'Paginator',
		props:{
			value:{
				type:Number,
				required:true
			}
		},
		methods:{
			changedPrev(value){
				this.$emit('click',value-1)
			},
			changedNext(value){
				this.$emit('click',value+1)
			}
		}
	}
</script>