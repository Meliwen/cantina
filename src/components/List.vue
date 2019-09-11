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

    <div class="userlist" v-if="recipesList">
      <UserCard v-for="recipe in filteredList" :recipe="recipe" :key="recipe.id"/>
    </div>
  </div>
</template>
<script>
import UserCard from './UserCard.vue';
import UserService from '../services/UserService.js';
export default {
  name: "List",
  components: {
    UserCard
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
      return this.recipesList.filter(({ titre, description, niveau }) => {
        let searchText = this.searchText.toLowerCase();
        titre = titre.toLowerCase();
        description = description.toLowerCase();

        if(this.filterValue === 'name'){ // si l'input dans le champ text est à "nom"  (filtrer par nom)

        return ( // afficher les résulats des noms qui correspondent à l'input
          `${description} ${titre}`.includes(searchText) ||
          `${titre} ${description}`.includes(searchText)
        )}

        else if (this.filterValue === 'niveau'){ // si l'input dans le champ text est à "niveau"  (filtrer par localistation)
          return niveau.includes(searchText);// afficher les résulats des niveaux qui correspondent à l'input
        }
      });
    }
  },
  created: function(){
    UserService.fetchAll().then(recipesList => {
        this.recipesList = recipesList;
    })
  }
};

</script>
<style scoped>
.userlist {
  display: flex;
  flex-wrap: wrap;
}

.userlist > * {
  box-sizing: border-box;
  width: calc(94% / 3);
  margin: 1%;
}

.filterform {
    width: 40%;
  margin: 2em 0;
  display: flex;
  justify-content: space-around;
  align-items: baseline;
}
.container{
    width: 100%;
    margin: 0 auto;
}
</style>