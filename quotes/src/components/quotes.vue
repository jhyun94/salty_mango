<template>
	<div class="container">
		<div class="row">
			<div class="col-md-3 quote-box" v-for="quote in quotesList">
				<p>{{quote}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import { EventBus } from '../main.js';
	export default {
		data() {
			return {
				quotesList: [
					'Whether you think you can or you think you can’t, you’re right'
				]
			}
		},

		mounted(){
			EventBus.$on('sendQuote', (data) => {
				console.log(data);
			})
		}
	}
</script>
<style scoped>

.quote-box {
	border: 1px solid black;
}
</style>