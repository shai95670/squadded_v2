<template>
  <ul class="comments-container">
     <li v-for="(comment, i) in comments" :key="i">{{comment}}</li> 
  </ul>
</template>

<script>

export default {
  name: "CommentSection",
  props: {
    comments: Array
  },
};
</script>

<style>
.comments-container {
  list-style: none;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
