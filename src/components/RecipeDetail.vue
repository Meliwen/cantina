<template>
  <div class="card mb-3 card-detail-container">
    <div class="col-md-5">
      <img :src="recipe.photo || DEFAULT_PHOTO" :alt="`Photo de ${recipe.titre}`" />
      <div class="bouton-container desk">
        <router-link :to="`/edit/${recipe.id}`" class="btn bouton">Modifier</router-link>
      </div>
    </div>
      <div>
        <h1 class="title">{{recipe.titre}}</h1>
        <p class="text description-text">{{recipe.description}}</p>
        <ul class="list-group list-group-flush" style="text-align: left">
          <li class="list-group-item">
            <b>Temps de préparation : </b>
            <span v-if="recipe.tempsPreparation > 60">{{Math.trunc(recipe.tempsPreparation/60)}}h</span>
            {{recipe.tempsPreparation%60}}
            <span v-if="((recipe.tempsPreparation%60) === 0) || ((recipe.tempsPreparation%60)===1)"></span>
            min
          </li>
          <li class="list-group-item">
            <b>Nombre de convives :</b>
            {{recipe.personnes}}
            <span v-if="recipe.personnes === 1">personne</span>
    <span v-else>personnes</span>
          </li>
          <div class="niveau">
            <li class="list-group-item">Niveau : {{recipe.niveau}}</li>
            <div v-if="recipe.niveau === 'padawan'">
              <img src="../assets/sabre_vert.png" width="100px" style="width: 100px" />
            </div>
            <div v-if="recipe.niveau === 'jedi'">
              <img src="../assets/sabre_bleu.png" width="100px" style="width: 100px" />
            </div>
            <div v-if="recipe.niveau === 'maitre'">
              <img src="../assets/sabre_violet.png" width="100px" style="width: 100px" />
            </div>
          </div>
          <span class="ingredients-title">
            <p>
              <b>Ingrédients :</b>
            </p>
          </span>
          <ul id="ingredients-list">
            <li
              v-for="ingredient in recipe.ingredients"
              :key="ingredient.id"
            >{{ingredient[0]}} {{ingredient[1]}}</li>
          </ul>
        </ul>
        <li class="list-group-item etapes-group">
          <p>
            <b>Étapes :</b>
          </p>
          <ol id="etapes-list">
            <li v-for="(etapes) in recipe.etapes" :key="etapes.id">{{etapes}}</li>
          </ol>
        </li>
      </div>
      <div class="bouton-container mobile">
        <router-link :to="`/edit/${recipe.id}`" class="bouton">Modifier</router-link>
      </div>
  </div>
</template>
<script>
export default {
  name: "RecipeDetail",
  props: {
    recipe: {
      type: Object
    }
  },
  computed: {
    DEFAULT_PHOTO: function() {
      return "https://s1.qwant.com/thumbr/0x0/2/2/6788a08a24aefe72817478982ee2e6/b_1_q_0_p_0.jpg?u=http%3A%2F%2Fgurucul.com%2Fwp-content%2Fuploads%2F2015%2F01%2Fdefault-user-icon-profile.png&q=0&b=1&p=0&a=1";
    }
  }
};
</script>
<style scoped>
/* MISE EN PAGE */
.mb-3 {
  width: 100%;
  border: 1px solid rgb(233, 233, 233);
  display: flex;
  flex-flow: row;
}
img {
  width: 100%;
  height: auto;
}
.data-v-0ce62faa {
  margin: 0;
}
.card {
  width: 100%;
}
.col-md-5 {
  padding: 0;
  margin: 0;
  border-right: 1px solid rgb(233, 233, 233);
}
.niveau {
  display: flex;
  flex-flow: row;
  align-items: baseline;
  border-bottom: 1px solid #dfdfdf;
}
h4 {
  padding-top: 2%;
}
.text,
.title,
h4 {
  padding-left: 3%;
}
/* ---- /MISE EN PAGE ---- */

/* TEXTE */
.description-text {
  color: #7d7d7d;
}
.title {
  padding-top: 2%;
  font-family: "ar_destineregular";
  font-size: 70px;
}
.ingredients-title {
  padding: 2% 0 0 3%;
}
#ingredients-list {
  padding-bottom: 2%;
}
.etapes-group{
  list-style-type: none;
  border-bottom: none;
  border-left: none;
  text-align: left;
}
/* ---- /TEXTE ---- */

/* BOUTONS */
.bouton-container {
  padding: 2%;
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
}
.mobile{
  display: none;
}
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

/* LISTES */
ol {
  list-style: none;
  counter-reset: my-awesome-counter;
  padding-left: 0px;
}
ol li {
  counter-increment: my-awesome-counter;
}
ol li::before {
  content: counter(my-awesome-counter) ". ";
  font-family: "ar_destineregular";
}
/* ---- /LISTES ---- */

@media screen and (max-width: 800px){
.card-detail-container{
display: flex;
flex-flow: column;
}
h1{
  text-align: center;
}
.desk{
  display: none;
}
.mobile{
  display: flex;
  padding: 0px 0px 20px 0px;
}
}
</style>