<template>
  <button v-on:click="emitLike">Like {{likeCnt}}</button>
</template>

<script>

export default {
  name: "LikeButton",
  props: {
    likeCnt: 0
  },
  components: {
  },
  methods: {
    emitLike(event){
      this.$emit("likeClicked")
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
