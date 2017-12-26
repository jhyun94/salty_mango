new Vue({
	el: '#exercise',
	data: {
		value: 0
	},
	computed: {
		result(){
			if(this.value !== 37){
				return 'not there yet'
			}

			return 'done'
		}
	},
	watch: {
		result: function(){
			var local = this;
			console.log(local);
			setTimeout( function(){
				local.value=0
			}, 5000)
		}
	}
})