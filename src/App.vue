<template>
  <div id="app">
    <MarketPlace msg="Welcome to Your Vue.js App"/>
    <i class="far fa-heart"></i>
  </div>
</template>

<script>
import MarketPlace from './components/MarketPlace.vue'

export default {
  name: 'App',
  components: {
    MarketPlace
  }
}
</script>

<style lang="scss">
html {
  background-color: #fafafa;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
