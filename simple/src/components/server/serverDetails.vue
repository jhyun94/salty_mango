<template>
    <div class="col-xs-12 col-sm-6">
        <p v-show="!show">Server Details are currently not updated</p>
        <div v-if="show">
        	<h3>Server#{{server.id}}</h3>
        	<p>Status: {{server.status}}</p>
        	<button @click="onChangeStatus">Set status to normal</button>
        </div>
    </div>

</template>

<script>
	import { serverBus } from '../../main';
	export default {
		created(){
			serverBus.$on('sendServerData', (data) =>{
				this.server=data;
				this.show = true
			})
		},
		data(){
			return {
				server: null,
				show: false
			}
		},
		methods: {
			onChangeStatus(){
				this.server.status = 'healthy';
			}
		}
	}
</script>

<style>

</style>
