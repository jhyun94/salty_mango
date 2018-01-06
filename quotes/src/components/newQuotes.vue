<template>
	<div class="container text-center">
		<textarea v-model="quote"></textarea>
		<button @click="onButtonClick">Add Quote</button>
	</div>
</template>

<script>
import { EventBus } from '../main.js';
export default {
	props: ['numOfQuotes'],

	data() {
		return {
			quote: ''
		}
	},

	methods: {
		onButtonClick(){
			if(this.checkQuotes()){
				alert('Please delete some quotes before adding new ones')
			} else {
				EventBus.$emit('sendQuote', this.quote);
				EventBus.$emit('quoteAdded');
				this.quote = '';
			}
		},

		checkQuotes(){
			if(this.numOfQuotes == 10){
				return true
			}

			return false
		}
	}

}

</script>

<style scoped>
button {
	display: block;
	margin: 0 auto;
}

textarea {
	height: 100px;
	width: 500px;
}

</style>