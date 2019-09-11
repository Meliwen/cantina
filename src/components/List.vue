<template>
  <div class="container centered">
    <h1>Liste des recettes</h1>
    <hr>

    <form class="filterform" @submit.prevent> <!-- submit.prevent évite d'envoyer des informations-->
      <input type="search" placeholder="Tapez un nom ou un lieu ..." v-model="searchText">

      <label for="filter">Filtrer par :</label>
      <select name="filterBy" v-model="filterValue">
        <option value="name">Nom</option>
        <option value="localisation">Localisation</option>
      </select>
    </form>

    <div class="userlist" v-if="usersList">
      <UserCard v-for="user in filteredList" :user="user" :key="user.id"/>
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
      usersList: null,
      searchText: "",
      filterValue: "name",
    }
  },
  computed: {
    filteredList: function() {
      return this.usersList.filter(({ titre, description, niveau }) => {
        let searchText = this.searchText.toLowerCase();
        titre = titre.toLowerCase();
        description = description.toLowerCase();

        if(this.filterValue === 'name'){ // si l'input dans le champ text est à "nom"  (filtrer par nom)

        return ( // afficher les résulats des noms qui correspondent à l'input
          `${description} ${titre}`.includes(searchText) ||
          `${titre} ${description}`.includes(searchText)
        )}

        else if (this.filterValue === 'localisation'){ // si l'input dans le champ text est à "localisation"  (filtrer par localistation)
          return niveau.includes(searchText);// afficher les résulats des niveaux qui correspondent à l'input
        }
      });
    }
  },
  created: function(){
    UserService.fetchAll().then(usersList => {
        this.usersList = usersList;
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
  margin: 2em 0;
}
</style>