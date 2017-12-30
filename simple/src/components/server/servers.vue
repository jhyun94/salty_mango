<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <server 
            	v-for="server in servers"
            	:server="server"></server>
        </ul>
    </div>
</template>

<script>
	import { serverBus } from '../../main';
	import server from './server';
	export default {
		components: { server },
		data(){
			return {
				servers: [
					{id: 1, status: 'healthy'},
					{id: 2, status: 'critical'},
					{id: 3, status: 'poor'},
					{id: 4, status: 'healthy'},
					{id: 5, status: 'healthy'}
				]
			}
		}
	}
</script>

<style>

</style>
