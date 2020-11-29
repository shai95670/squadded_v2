<template>
   <ul class="feed-container">
      <Post v-for="post in posts" :key="post.id" v-bind:post="post" @likeClicked="likePost" @addCommentClicked="addComment"/>
   </ul>
</template>

<script>
import PostService from "@/services/PostService";
import Post from "./Post.vue"

export default {
  name: "Feed",
  components: {
    Post
  },
  data() {
    return {
      posts: []
    };
  },
  methods: {
    likePost(id){
     console.log('test'); 
     const post = PostService.getPostById(id)
     post.likes++
    },
    addComment({commentTxt, postId}){
     const post = PostService.getPostById(postId)
     post.comments.push(commentTxt)
    }
  },
  created(){
    this.posts = PostService.getPosts()
  }  
};
</script>

<style lang="scss">
.feed-container {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
