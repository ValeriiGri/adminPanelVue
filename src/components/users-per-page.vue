<template>
	<div>
		<select :value="value" @change="changed($event.target.value)">
			<option v-for="item of list" :key="item" :value="item">
				{{item}}
			</option>
		</select>
	</div>
</template>

<script>
	export default{
		name:'UsersPerPage',
		props:{
			value:{
				type:Number,
				required:true
			}
		},
		data:()=>({
			list:[5,10,15,20]
		}),
		methods:{
			changed(value){
				this.$emit('input',value)
			}
		}
	}
</script>