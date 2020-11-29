<template>
  <button v-on:click="emitComment">Comment {{commentCnt}}</button>
</template>

<script>

export default {
  name: "CommentButton",
  props: {
    commentCnt: 0
  },
  components: {
  },
  methods: {
    emitComment(event){
      this.$emit("commentClicked")
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
