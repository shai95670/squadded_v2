<template>
  <ul class="comments-container">
     <li v-for="comment in comments" :key="1">{{comment}}</li> 
  </ul>
</template>

<script>

export default {
  name: "CommentSection",
  props: {
    comments: Array
  },
  components: {
  },
 
};
</script>

<style>
.comments-container {
  list-style: none;
}
</style>
