<template>
  <div class="container">
    <h4>Quotes Added</h4>
    <div class="quote-bar">
      <div class="active-quotes-bar text-center" :style="{width: numOfQuotes*10 + '%'}"><span>{{numOfQuotes}}/10</span></div>
    </div>
    <new-quotes :numOfQuotes="numOfQuotes"></new-quotes>
    <quotes></quotes>
    <div class="text-center">
      <p>Info: Click on a quote to delete</p>
    </div>
  </div>
</template>

<script>
import quotes from './components/quotes'
import newQuotes from './components/newQuotes';
import { EventBus } from './main.js';
export default {
  components: {
    quotes,
    newQuotes
  },

  mounted(){
    EventBus.$on('quoteAdded', () => {
      this.numOfQuotes++;
    })
  },

  data() {
    return {
      numOfQuotes: 1
    }
  }
  
}
</script>

<style scoped>

.quote-bar {
  width: 90%%;
  height: 20px;
  border: 1px solid black;
  margin: 20px 0;
}

.active-quotes-bar {
  background-color: blue;
  height: 20px;
}

span {
  color: #fff;
}
</style>
