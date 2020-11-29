<template>
  <div class="post-container">
     <div class="author-info-container">
         <avatar class="author-avatar" username="post.authorName"></avatar>
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
       <div class="comment-input-section">
         <textarea v-model="commentTxt"></textarea>
         <i v-on:click="emitComment(post.id)" class="fas fa-paper-plane"></i>
       </div>
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
      if(this.isShown) {
        this.isShown = false;
        return;
      }
      this.isShown = true;
    },
    emitLike(id){
      this.$emit('likeClicked', id)
    },
    emitComment(id){
      if (!this.commentTxt) return;
      this.$emit('addCommentClicked', {commentTxt:this.commentTxt, postId:id})
      this.commentTxt = '';
    }
  }
};
</script>

<style lang="scss">
.post-container {
    display: flex;
    flex-direction: column;
    width: 25%;
    margin-bottom: 32px;
    box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.15);
    border-radius: 2%;

    .author-info-container {
      display: flex;
      align-items: center;
      background-color: white;
      margin-bottom: 7px;
      padding-top: 6px;

      .author-avatar {
        margin-left: 7px;
      }

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
        height: 48px;
        align-items: baseline;
    }
}

.comment-input-section {
  display: flex;
  justify-content: center;
  align-items: center;

  textarea {
        border: none;
        overflow: auto;
        outline: none;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        resize: none;
        background-color: #fafafa;
        border-bottom: 2px solid black;
  }

  i {
    font-size: 20px;
    cursor: pointer;
  }
}
</style>
