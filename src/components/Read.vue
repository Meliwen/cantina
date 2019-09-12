<template>

<div class="conteneur">
    <h1>test</h1>
    <hr>
   <div class="recipeDetail" >
      <UserCard :recipe="recipe" v-if="recipe"></UserCard>
    </div>
</div>
</template>
<script>
import UserCard from "./UserCard.vue";
import UserService from '../services/UserService.js';

export default {
  name: "Read",
  components: {
    UserCard
  },
  
  data: function() {
    return {
      recipe: null
    };
  },

  created: function(){
    UserService.fetchOne(this.$route.params.id)
    .then(recipe => {
      console.log(recipe);
      this.recipe = recipe;
    })
  }
};

</script>
<style scoped>
.recipeDetail{
  width: 50%;
  margin: 0 auto;
}
</style>