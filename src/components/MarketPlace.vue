<template>
  <div>
    <h1>hi</h1>
    <Feed />
  </div>
</template>

<script>
import Feed from "./Feed.vue"

export default {
  name: "MarketPlace",
  components: {
    Feed,
  },
  props: {
  },
  methods: {
  },
  created(){
      console.log('test');
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
