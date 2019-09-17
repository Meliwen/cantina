<template>
<div class="conteneur_g">
  <router-link :to="`/read/${recipe.id}`" class="card-link">
  <div class="card">
    <div class="photo-hover">
   <img :src="recipe.photo || DEFAULT_PHOTO" :alt="`Photo de ${recipe.titre}`">
    </div>
  <div class="card-body">
    <h5 class="card-title">{{recipe.titre}}</h5>
    <p class="card-text description-text">{{recipe.description}}</p>
  </div>
  <ul class="list-group list-group-flush" style="text-align: left">
    <li class="list-group-item">Temps de préparation : {{recipe.tempsPreparation}} min</li>
    <li class="list-group-item">Nombre de convives : {{recipe.personnes}} personne(s)</li>
    <div class="niveau"><li class="list-group-item">Niveau : {{recipe.niveau}}</li>
    <div v-if="recipe.niveau === 'padawan'"><img src="../assets/sabre_vert.png" width="100px" style="width: 100px"></div>
    <div v-if="recipe.niveau === 'jedi'"><img src="../assets/sabre_bleu.png" width="100px" style="width: 100px"></div>
    <div v-if="recipe.niveau === 'maitre'"><img src="../assets/sabre_violet.png" width="100px" style="width: 100px"></div>
    </div>
  </ul>
  <div class="bouton-container">
    <router-link :to="`/edit/${recipe.id}`" class="bouton">Modifier</router-link>
    <a href="#" class="bouton-delete" @click.prevent="onRemove">Supprimer</a>
  </div>
</div>
</router-link>
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
      return "https://cdn.pixabay.com/photo/2019/09/15/14/42/dish-4478482_960_720.png"
    }
  },
  methods: {
    onRemove: function(){
      this.$emit("remove",this.recipe);
    }
  }
}
</script>
<style scoped>
/* MISE EN FORME */
.card{
  border-radius: 0.5rem;
  -webkit-box-shadow: 8px 8px 30px -19px rgba(0,0,0,0.54);
  -moz-box-shadow: 8px 8px 30px -19px rgba(0,0,0,0.54);
  box-shadow: 8px 8px 30px -19px rgba(0,0,0,0.54);
}
.photo-hover :hover{
  opacity: 0.80;
}
.mb-3{
  border: 1px solid grey;
}
.niveau{
  display: flex;
  flex-flow: row;
  align-items: baseline;
  border-bottom: 1px solid #dfdfdf;
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
.data-v-0ce62faa{
  margin: 0;
}
/* --- /MISE EN FORME --- */

/* TEXTE */
.card-link{
  text-decoration: none;
  color: inherit;
}
.description-text{
  color: #7d7d7d;
}
.card-title{
  font-family: 'Squada One', Arial, cursive;
  font-size: 24px;
  letter-spacing: 1px;
}
.list-group-item, .description-text{
  font-family: 'Roboto', 'Calibri', sans-serif;
}
/* --- /TEXTE --- */

/* BOUTONS */
.bouton, .bouton-delete {
  background-color: #424242;
  color: #ffffff;
  padding: 2% 7%;
  border-radius: 0.5rem;
  text-decoration: none;
  min-width: 125px;
}
.bouton-delete:hover{
  background-color: red;
  transform: scale(1.05);
}
.bouton:hover {
  background-color: rgb(233, 233, 233);
  color: #000000;
  transform: scale(1.05);
}
/* ---- /BOUTONS ---- */
</style>