<template>
<div class="conteneur_g">
  <router-link :to="`/read/${recipe.id}`" class="card-link">
  <div class="card">
   <img :src="recipe.photo || DEFAULT_PHOTO" :alt="`Photo de ${recipe.titre}`">
  <div class="card-body">
    <h5 class="card-title">{{recipe.titre}}</h5>
    <p class="card-text description-text">{{recipe.description}}</p>
  </div>
  <ul class="list-group list-group-flush" style="text-align: left">
    <li class="list-group-item">Temps de préparation : {{recipe.tempsPreparation}} min</li>
    <li class="list-group-item">Nombre de convives : {{recipe.personnes}} <img src="../assets/stormtrooper.png" width="20px" style="width: 20px"></li>
    <div class="niveau"><li class="list-group-item">Niveau : {{recipe.niveau}}</li>
    <div v-if="recipe.niveau === 'padawan'"><img src="../assets/sabre_vert.png" width="100px" style="width: 100px"></div>
    <div v-if="recipe.niveau === 'jedi'"><img src="../assets/sabre_bleu.png" width="100px" style="width: 100px"></div>
    <div v-if="recipe.niveau === 'maitre'"><img src="../assets/sabre_violet.png" width="100px" style="width: 100px"></div>
    </div>
  </ul>
  <div class="bouton-container">
    <router-link :to="`/edit/${recipe.id}`" class="btn bouton">Modifier</router-link>
    <a href="#" class="btn bouton" @click.prevent="onRemove">Supprimer</a>
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
      return "https://cdn.pixabay.com/photo/2019/09/15/14/42/14-42-27-793_960_720.png"
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
.card{
  border-radius: 1rem;
  -webkit-box-shadow: 8px 8px 30px -19px rgba(0,0,0,0.54);
  -moz-box-shadow: 8px 8px 30px -19px rgba(0,0,0,0.54);
  box-shadow: 8px 8px 30px -19px rgba(0,0,0,0.54);
}
.card-link{
  text-decoration: none;
  color: inherit;
}
.description-text{
  color: #7d7d7d;
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
.bouton-container{
  padding: 2%;
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;

}
.bouton{
  background-color: white;
  color: #424242;
  min-width: 150px;
  padding: 2%;
}
.bouton:hover{
  background-color: #424242;
  color: white;
  transform: scale(1);
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