<template>
  <div v-on:click="emitLike">
    <i v-bind:class="classObject"></i><span>{{likeCnt}}</span>
  </div>
</template>

<script>

export default {
  name: "LikeButton",
  props: {
    likeCnt: 0
  },
  methods: {
    emitLike(event){
      this.$emit("likeClicked")
    }
  },
  computed: {
    classObject: function () {
      return {
        // 'white-like': this.likeCnt < 1,
        'red-like':  this.likeCnt >= 3,
        'gray-like': this.likeCnt < 3 && this.likeCnt > 1,
        "like-icon": true,
        "far": true,
        "fa-heart": true
      }
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
