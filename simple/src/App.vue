<template>
   <div>
    <button @click="component = 'red'">Red Template</button>
    <button @click="component = 'blue'">Blue Template</button>
    <button @click="component = 'green'">Green Template</button>

    <component :is="component"></component>
   </div>
</template>

<script>
  import blue from './components/blue'
  import red from './components/red'
  import green from './components/green'

  export default {
    components: {
      blue,
      red,
      green
    },

    data(){
      return {
        component: 'red'
      }
    }
  }

    
</script>

<style>

</style>