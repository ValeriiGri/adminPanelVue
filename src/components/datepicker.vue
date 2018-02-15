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
		data:function(){
			return{
				flatP:null
			};
		},
		methods:{
			//инициализируем плагин и записываем возвращенный экземпляр в flatP 
			//и оттуда имеем доступ к его св-вам, open(),например 
			initPlagin(){
				this.flatP = flatpickr(this.$refs.datepicker,{
								dateFormat:'d.m.Y',
								//flatpickr's Function to trigger on every date selection.
								onChange:(selectedDates, dateStr) => {	
									this.update(dateStr);
								}
							}); 
			},
			dateP(){
				this.flatP.open();
			},
			update (newDate) {
				this.$emit('input',newDate)
			}
		},
		mounted:function(){
			this.initPlagin();
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