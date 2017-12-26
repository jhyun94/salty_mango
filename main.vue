new Vue({
	el: "#exercise",
	data: {
		value: ''
	},

	methods: {
		alert(){
			alert('show me!')
		},
		onKeyDown(event){
			this.value=event.target.value
		}
	}
})