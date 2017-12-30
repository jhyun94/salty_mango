<template>
	<li class="list-group-item"
		@click="onServerClick">
		Server#{{server.id}} - {{server.status}}
	</li>
</template>
<script>
	import {serverBus} from '../../main';
	export default {
		props: ['server'],
		methods: {
			onServerClick(){
				serverBus.$emit('sendServerData', this.server);
			}
		}
	}
</script>

<style scoped>
	li {
		cursor: pointer;
	}
</style>
