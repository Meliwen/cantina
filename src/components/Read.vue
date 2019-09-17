<template>
<div class="conteneur">
   <div class="recipeDetail" >
      <RecipeDetail :recipe="recipe" v-if="recipe"></RecipeDetail>
    </div>
</div>
</template>
<script>
import RecipeDetail from "./RecipeDetail.vue";
import RecipeService from '../services/RecipeService.js';

export default {
  name: "Read",
  components: {
    RecipeDetail
  },
  
  data: function() {
    return {
      recipe: null
    };
  },

  created: function(){
    RecipeService.fetchOne(this.$route.params.id) //fetchAll
    .then(recipe => {
      this.recipe = recipe;
    })
  }
};

</script>
<style scoped>
.recipeDetail{
  width: 80%;
  margin: 0 auto;
}
</style>