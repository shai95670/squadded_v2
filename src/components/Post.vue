<template>
  <div class="post-container">
     <div class="author-info-container">
         <avatar username="post.authorName"></avatar>
         <span>{{post.authorName}}</span>
     </div>
     <div class="post-info-container">
         <img v-bind:src="post.postThumbnail" alt="" srcset="" class="post-thumbnail">
         <p>{{post.postName}}</p>
         <div class="post-statistics-container">
             <span>${{post.price}}</span>
             <CommentButton v-bind:commentCnt="post.comments.length" @commentClicked="showCommentSection"/>
             <LikeButton v-bind:likeCnt="post.likes" @likeClicked="emitLike(post.id)"/>
         </div>
     </div>
     
     <div v-if="isShown" class="comment-container">
       <textarea v-model="commentTxt"></textarea><button v-on:click="emitComment(post.id)" >Add Comment</button>
       <CommentSection v-bind:comments="post.comments"/>
     </div>
  </div>
</template>

<script>
import CommentSection from "./CommentSection.vue"
import CommentButton from "./CommentButton.vue"
import LikeButton from "./LikeButton.vue"
import Avatar from 'vue-avatar'


export default {
  name: "Post",
  data() {
    return {
      isShown: false,
      commentTxt: ''
    };
  },
  props: {
    post: Object
  },
  components: {
    CommentSection,
    CommentButton,
    LikeButton,
    Avatar
  },
  methods: {
    showCommentSection(){
      console.log('test')
      this.isShown = true;
    },
    emitLike(id){
      this.$emit('likeClicked', id)
    },
    emitComment(id){
      if (!this.commentTxt) return;
      this.$emit('addCommentClicked', {commentTxt:this.commentTxt, postId:id})
    }
  }
};
</script>

<style lang="scss">
.post-container {
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-bottom: 32px;
  box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.15);
  border-radius: 2%;

  .author-info-container {
    display: flex;
    align-items: center;
    background-color: white;
    margin-bottom: 7px;

    span {
      font-size: 1.8rem;
      width: 22%;
    }
  }
  .post-thumbnail {
    width:100%;
    height:200px;
    background-color: #d9d9d9;
    border-radius: 2%;
  }

  p {
    position: relative;
    bottom: 90px;
    font-size: 1.5rem;
    color: white;
  }

  .post-statistics-container {
    display: flex;
    justify-content: space-around;
  }
}
</style>
