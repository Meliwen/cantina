<template>
  <div class="container centered">
    <h1>Liste des recettes</h1>
    <hr>

    <form class="filterform" @submit.prevent> <!-- submit.prevent évite d'envoyer des informations-->
      <input type="search" placeholder="Tapez un nom..." v-model="searchText">
      <label for="filter">Filtrer par :</label>
      <select name="filterBy" v-model="filterValue">
        <option value="name">Nom</option>
        <option value="niveau">Niveau</option>
      </select>
    </form>

    <div class="recipeList" v-if="recipesList">
      <RecipeCard v-for="recipe in filteredList" :recipe="recipe" :key="recipe.id" @remove="removeRecipe"/>
    </div>
  </div>
</template>
<script>
import RecipeCard from './RecipeCard.vue';
import RecipeService from '../services/RecipeService.js';
export default {
  name: "List",
  components: {
    RecipeCard
  },
  data: function(){
    return{
      recipesList: null,
      searchText: "",
      filterValue: "name",
    }
  },
  computed: {
    filteredList: function() {
      return this.recipesList.filter(({ titre, niveau }) => {
        let searchText = this.searchText.toLowerCase();
        titre = titre.toLowerCase();

        if(this.filterValue === 'name'){ // si l'input dans le champ text est à "nom"  (filtrer par nom)

        return ( // afficher les résulats des noms qui correspondent à l'input
          `${titre}`.includes(searchText)          
        )}

        else if (this.filterValue === 'niveau'){ // si l'input dans le champ text est à "niveau"  (filtrer par localistation)
          return `${niveau}`.includes(searchText);// afficher les résulats des niveaux qui correspondent à l'input
        }
      });
    }
  },
  methods: {
    removeRecipe: function(recipeToDelete) {
      if (confirm("Voulez-vous vraiment suprimer cette recette ?"))
      RecipeService.removeRecipe(recipeToDelete)
        .then(res => {
          let index = this.recipesList.indexOf(recipeToDelete);
          if (index > -1) {
            this.recipesList.splice(index,1);
          }
          this.$toasted.show(
            `Recette "${res.recette.titre}" supprimée! ❎`
          );
        })
        .catch(({ message }) => this.$toasted.error(message));
    }
  },
  created: function(){
    RecipeService.fetchAll().then(recipesList => {
        this.recipesList = recipesList;
    })
  }
};

</script>
<style scoped>
/* MISE EN FORME */
form input, form select{
  background: white;
}
.recipeList {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
}
.recipeList > * {
  box-sizing: border-box;
  width: calc(94% / 3);
  margin: 1%;
}

.filterform {
  width: 40%;
  margin: 2em 0;
  display: flex;
  justify-content: space-around;
}
.container{
  width: 100%;
  margin: 0 auto;
}
/* --- /MISE EN FORME --- */

/* TEXTE */
h1{
  font-family: 'ar_destineregular';
  font-size: 60px;
}
/* --- /TEXTE --- */

@media screen and (max-width: 800px){
  .conteneur_g{
    width: 100%;
  }
  h1{
    text-align: center;
  }
  .filterform{
    width: 100%;
  }
}
</style>