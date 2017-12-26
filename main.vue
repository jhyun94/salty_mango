new Vue({
	el: "#root",
	data: {
		counter: 0,
		result: ''
	},

	methods: {
		increment(){
			this.counter++;
			this.result= this.counter > 5 ? 'Greater than 5' : 'less than 5';
			
		}
	}
})