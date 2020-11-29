<template>
  <div v-on:click="emitLike">
    <i class="like-icon far fa-heart" ></i><span>{{likeCnt}}</span>
  </div>
</template>

<script>

export default {
  name: "LikeButton",
  props: {
    likeCnt: 0
  },
  data: {
    // classObject: {
    //   'white-like': likeCnt < 1,
    //   'red-like':  likeCnt >= 3,
    //   'gray-like': likeCnt < 3 && likeCnt > 1
    // }
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

<style lang="scss" scoped>
div {
  cursor: pointer;
  .like-icon {
    font-size: 30px
  }
  span {
    position: relative;
    right: 19px;
    bottom: 6px;
  }
}
.white-like {
  color: white;
}
.red-like {
  color: red
}
.gray-like {
  color: gray
}
</style>
