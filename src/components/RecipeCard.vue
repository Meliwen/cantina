<template>
<div class="conteneur">
  <div class="card">
   <img :src="recipe.photo || DEFAULT_PHOTO" :alt="`Photo de ${recipe.titre}`">
  <div class="card-body">
    <h5 class="card-title">{{recipe.titre}}</h5>
    <p class="card-text">{{recipe.description}}</p>
  </div>
  <ul class="list-group list-group-flush" style="text-align: left">
    <li class="list-group-item">Temps de préparation : {{recipe.tempsPreparation}} min</li>
    <li class="list-group-item">Nombre de convives : {{recipe.personnes}} personne(s)</li>
    <li class="list-group-item">Niveau : {{recipe.niveau}}</li>
  </ul>
  <div class="card-body">
    <router-link :to="`/read/${recipe.id}`" class="btn btn-small">Lire</router-link>
    <router-link :to="`/edit/${recipe.id}`" class="btn btn-small">Modifier</router-link>
    <a href="#" class="btn btn-small" @click.prevent="onRemove">Supprimer</a>
  </div>
</div>
</div>
</template>
<script>
export default {
  name: "RecipeCard",
  props: {
    recipe: {
      type: Object
    }
  },
  computed : {
    DEFAULT_PHOTO: function(){
      return "https://cdn.pixabay.com/photo/2014/03/25/16/34/silverware-297422_960_720.png"
    }
  },
  methods: {
    onRemove: function(){
      console.log("onRemove");
      this.$emit("remove",this.recipe);
    }
  }
}
</script>
<style scoped>
.mb-3{
    border: 1px solid grey;
}
img{
    width: 100%;
    height: auto;
}
h3, p{
    text-align: left;
}
.card-text-col-3-big{
    width: 40%;
    display: inline-block;
}
.card-text-col-3-small{
    width: 20%;
    display: inline-block;
}
.boutons{
    width: 100%;
    display: flex;
    justify-content: flex-start;
}
.data-v-0ce62faa{
  margin: 0;
}
</style>