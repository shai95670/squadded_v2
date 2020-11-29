<template>
  <div id="app">
    <h1><span>M</span>arket <span>P</span>lace</h1>
    <MarketPlace msg="Welcome to Your Vue.js App"/>
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

<style lang="scss" scoped>
html {
  background-color: #fafafa;

  h1 {
    font-family: fantasy;
    text-align: center;
    font-size: 39px;
    color: dimgrey;
  }

  span {
    color: black;
  }
}
</style>
