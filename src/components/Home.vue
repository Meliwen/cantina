<template>
  <div class="conteneur-big centered">
    <h1>Bienvenue sur Cantina</h1>
    <p>Une appli pour les cuisiner tous</p>
    <hr>
    <h3>Avez vous déjà essayé de cuisiner...</h3>

    <RecipeDetail :recipe="recipe" v-if="recipe" @remove="removeRecipe"/>

    <div class="bouton-container">
      <a href="#" class="bouton" @click.prevent="refreshPage">
        Essayer une autre recette
      </a>
    </div>
  </div>
</template>

<script>
import RecipeDetail from "./RecipeDetail.vue";
import RecipeService from "../services/RecipeService.js";

export default {
  name: "Home",
  components: {
    RecipeDetail
  },
  data: function() {
    return {
      recipe: null
    };
  },
  methods: {
    getRandomRecipe: function() {
      this.recipe = this.recipe[Math.floor(Math.random() * this.recipe.length)];
    },
    refreshPage: function(){
        document.location.reload(true);
    },
    removeRecipe: function(recipeToDelete) {
      RecipeService.removeRecipe(recipeToDelete)
        .then(() => {
          let index = this.recipe(recipeToDelete);
          if (index > -1) {
            this.recipe.splice(index, 1);
          }
          this.$toasted.success("Collaborateur supprimé ! 💪");
          this.getRandomRecipe();
        })
        .catch(({ message }) => this.$toasted.error(message));
    }
  },
  created: function() {
    RecipeService.fetchAll()
      .then(usersList => {
        this.recipe = usersList;
        this.getRandomRecipe();
      })
      .catch(({ message }) => this.$toasted.error(message));
  }
};
</script>

<style scoped>
/* MISE EN FORME */
.conteneur-big{
width: 75%;
margin: 0 auto;
}
/* ---- /MISE EN FORME ---- */

/* BOUTONS */
.bouton-container{
  padding: 10px 0px 10px 0px;
  display: flex;
  flex-flow: row;
  text-decoration: none;
  justify-content: space-evenly;

}
.bouton{
  background-color: white;
  text-decoration: none;
  color: #424242;
  min-width: 150px;
  padding: 10px 20px;
  border-radius: 0.5rem;
}
.bouton:hover{
  text-decoration: none;
  background-color: #424242;
  color: white;
  transform: scale(1.05);
}
/* ---- /BOUTONS ---- */
</style>
