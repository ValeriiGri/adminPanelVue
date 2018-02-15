<template>
	<div>
		<input type="text" class="hidden" ref="datepicker" :value="value">
		<button type="button" class="btn btn-primary" @click="dateP">
			Изменить дату
		</button>
	</div>
</template>

<script>
	import flatpickr from 'flatpickr';
	import 'flatpickr/dist/flatpickr.css';

	export default{
		name:'Datepicker',
		props:{
			value:{
				type: String,
				required:true
			}
		},
		methods:{
			dateP(){
				flatpickr(this.$refs.datepicker,{
						dateFormat:'d.m.Y',
						onChange:(selectedDates, dateStr) => {	//flatpickr's Function to trigger on every date selection.
							this.update(dateStr);
						}
						}).open();
			},
			update (newDate) {
				this.$emit('input',newDate)
			}
		},
		mounted:function(){
			flatpickr(this.$refs.datepicker,{
						dateFormat:'d.m.Y',
						onChange:(selectedDates, dateStr) => {	//flatpickr's Function to trigger on every date selection.
							this.update(dateStr);
						}
						});
		}
	}

</script>

<style>
	.btn{
		margin-top: 10px;
	}
	.hidden{
		display: none;
	}
</style>