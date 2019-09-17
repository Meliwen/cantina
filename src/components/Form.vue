<template>
<form class="recipeform" @submit.prevent="onSubmit">
  <div class="top-bloc">
    <div class="form-input-text">
      <label for="photo">Photo :</label>
      <input type="url" v-model.lazy="$v.recipe.photo.$model" id="photo" placeholder="http://">
      <span v-if="!$v.recipe.photo.url">L'URL est invalide</span>
    </div>

    <div class="form-input-text">
      <label for="titre">Titre :</label>
      <input
        type="text"
        v-model="$v.recipe.titre.$model"
        @blur="$v.recipe.titre.$touch()"
        id="titre"
        placeholder="Titre"
      >
      <span v-if="$v.recipe.titre.$dirty && !$v.recipe.titre.required">Le champs est requis</span>
    </div>

    <div class="form-input-text">
      <label for="description">Description :</label>
      <input
        type="text"
        v-model="$v.recipe.description.$model"
        @blur="$v.recipe.description.$touch()"
        id="description"
        placeholder="Description"
      >
      <span v-if="$v.recipe.description.$dirty && !$v.recipe.description.required">Le champs est requis</span>
    </div>

    <div class="form-input-text">
      <label for="niveau">Niveau :</label>
      <input
        type="text"
        v-model="$v.recipe.niveau.$model"
        @blur="$v.recipe.niveau.$touch()"
        id="niveau"
        placeholder="niveau"
      >
      <span v-if="$v.recipe.niveau.$dirty && !$v.recipe.niveau.required">Le champs est requis</span>
    </div>

    <div class="form-input-text">      
      <label for="personnes">Nombre de convives :</label>
      <input
        type="number"
        min="1" max="10"
        v-model.number="$v.recipe.personnes.$model"
        @blur="$v.recipe.personnes.$touch()"
        id="personnes"
        placeholder="Ex: 6"
        class="form-control"
      >
      <span v-if="$v.recipe.personnes.$dirty && !$v.recipe.personnes.required">Le champs est requis</span>
    </div>
    
    <div class="form-input-text">      
      <label for="tempsPreparation">Temps de préparation :</label>
      <input
        type="number"
        v-model.number="$v.recipe.tempsPreparation.$model"
        @blur="$v.recipe.tempsPreparation.$touch()"
        id="tempsPreparation"
        placeholder="Ex: 45"
        class="form-control"
      >
      <span v-if="$v.recipe.tempsPreparation.$dirty && !$v.recipe.tempsPreparation.required">Le champs est requis</span>
    </div>
  </div>
  <hr>

    <div class="ingredients">
      <label for="ingredient">Ingrédient :</label>
      <div class="form-group" v-for="(ingredient, index) in recipe.ingredients" :key="index">
      <input type="text" placeholder="Exemple : 100g" v-model="ingredient[0]">
      <input type="text" placeholder="Exemple : de farine" v-model="ingredient[1]">
      <a href="#" class="button" @click.prevent="removeIngredient(index)">❌</a>
    </div>
  </div>
  <div>
    <a href="#" class="button" @click.prevent="addIngredient">Ajouter un ingrédient ➕</a>
  </div>

  <hr>

  <div id="addEtape">
    <label for="etapes">Etapes :</label>
      <div class="form-group" v-for="(etapes, index) in recipe.etapes" :key="index">
      <input type="text" placeholder="Exemple : Peser la farine" v-model="recipe.etapes[index]">
      <a href="#" class="button" @click.prevent="removeEtape(index)">❌</a>
    </div>
  </div>
  <div>
    <a href="#" class="button" @click.prevent="addEtape">Ajouter une étape ➕</a>
  </div>

    <div class="bouton-container">
      <button type="submit" class="bouton">Envoyer</button>
    </div>
  </form>
</template>

<script>
import { required} from "vuelidate/lib/validators";

export default {
  name: "Form",
  components: {
  },
  props: {
    recipe: {
      type: Object,
      default: function() {
        return {
          id: null,
          titre: "",
          description: "",
          niveau:"",
          personnes: null,
          tempsPreparation: null,
          ingredients: [["" , ""]],
          etapes: [""],
          photo: "",
        };
      }
    }
  },

  validations: {
    recipe: {
      photo: { url:function(url){
        if(url.startsWith("http")|| url.startsWith("https")){
          return true;
        }
        return false;
      } },
      titre: { required },
      description: { required },
      niveau: { required },
      personnes: { required },
      tempsPreparation: { required }
    }
  },

  methods: {
    onSubmit: function() {
      //Si les règles de l'objet 'recipe' sont invalides, on stoppe l'exécution de la fonction
      if (this.recipe.$invalid) return this.recipe;
      //Fait remonter un événement vers le composant parent
      this.$emit("send", this.recipe);
    },
    addIngredient: function () {
      this.recipe.ingredients.push (["",""]);
    },
    removeIngredient: function (index) {
      this.recipe.ingredients.splice(index, 1);
    },
    addEtape: function () {
      this.recipe.etapes.push("");
    },
    removeEtape: function (index) {
      this.recipe.etapes.splice(index, 1);
    }
  }
};
</script>

<style scoped>
a{
  text-decoration: none;
  color: inherit;
}
.top-bloc{
  width: 55%;
  margin: 0 auto;
  padding-top:2%;
}
form input{
  background: white;
  text-align: left;
  min-width: 400px;
}
.recipeform {
  margin: 2em 0;
  background-color:rgb(233,233,233);
  border: 10px solid white;
  color: #424242;
  border-radius: 0.5rem;
}
.form-input-text{
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1% 0;
}
.form-input-text input{
  border-radius: 0.5rem;
}
.recipeform .form-group {
  margin-bottom: 1.2em;
}
.top-bloc label {
  padding-right: 2%;
}
.bouton-container{
  padding: 2%;
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;

}
.bouton {
  background-color: #424242;
  color: #ffffff;
  padding: 1% 7%;
  border-radius: 0.5rem;
}
.bouton:hover {
  background-color: #ffffff;
  color: #000000;
  -webkit-box-shadow: 8px 8px 30px -19px rgb(0, 0, 0);
  -moz-box-shadow: 8px 8px 30px -19px rgb(0, 0, 0);
  box-shadow: 8px 8px 30px -19px rgb(0, 0, 0);
}
.recipeform input[type="radio"] + label {
  min-width: 0;
  text-align: left;
  cursor: pointer;
}
.ingredients input, #addEtape input{
  border-radius: 0.5rem;
  margin-right: 5px;
}
#addEtape, .ingredients{
  padding: 1% 0;
}
.actions{
  padding-bottom: 2%;
}
.recipeform input:not([type="radio"]) {
  vertical-align: middle;
}

.recipeform input ~ span {
  display: block;
  font-size: 0.8em;
  color: red;
}

.recipeform .input-error {
  border: 1px solid red;
}
</style>
