<template>
	<div class="container text-center">
		<textarea v-model="quote"></textarea>
		<button @click="onButtonClick">Add Quote</button>
	</div>
</template>

<script>
import { EventBus } from '../main.js';
export default {
	data() {
		return {
			quote: ''
		}
	},

	methods: {
		onButtonClick(){
			EventBus.$emit('sendQuote', this.quote);
			this.quote = '';
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