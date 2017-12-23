new Vue({
	el: "#root",
	data: {
		name: 'Jon',
		age: 23,
		imgSrc: 'https://vuejs.org/images/logo.png'
	},

	methods: {
		randomNum(){
			return Math.random() * 1
		}
	}
})