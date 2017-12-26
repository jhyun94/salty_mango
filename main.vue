new Vue({
	el: "#root",
	data: {
		value: 0,
		x: 0,
		y: 0
	},

	methods: {
		increment(){
			this.value++
		},
		coordinates(event){
			this.x= event.clientX;
			this.y= event.clientY;
		}
	}
})