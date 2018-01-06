<template>
  <div>
    <h4>Quotes Added</h4>
    <new-quotes></new-quotes>
    <quotes></quotes>
    <div class="text-center">
      <p>Info: Click on a quote to delete</p>
    </div>
  </div>
</template>

<script>
import quotes from './components/quotes'
import newQuotes from './components/newQuotes';
export default {
  components: {
    quotes,
    newQuotes
  }
  
}
</script>

<style>

</style>
