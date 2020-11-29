<template>
    <div v-on:click="emitComment">
      <i class="comment-icon far fa-comment"></i><span>{{commentCnt}}</span>
    </div>
</template>

<script>

export default {
  name: "CommentButton",
  props: {
    commentCnt: 0
  },
  methods: {
    emitComment(event){
      this.$emit("commentClicked")
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  cursor: pointer;
  .comment-icon {
    font-size: 30px
  }
  span {
    position: relative;
    right: 19px;
    bottom: 8px;
  }
}
</style>
