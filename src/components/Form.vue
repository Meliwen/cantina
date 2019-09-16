<template>
<form class="recipeform" @submit.prevent="onSubmit">

    <div class="form-group">
      <label for="photo">Photo :</label>
      <input type="url" v-model.lazy="$v.recipe.photo.$model" id="photo" placeholder="http://">
      <span v-if="!$v.recipe.photo.url">L'URL est invalide</span>
    </div>

    <div class="form-group">
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

    <div class="form-group">
      <label for="description">Description :</label>
      <input
        type="text"
        v-model="recipe.description"
        id="description"
        placeholder="Description"
      >
      <span v-if="recipe.description.$dirty && !recipe.description.required">Le champs est requis</span>
    </div>

    <div class="form-group">
      <label for="niveau">Niveau :</label>
      <input
        type="text"
        v-model="recipe.niveau"
        id="niveau"
        placeholder="niveau"
      >
      <span v-if="recipe.niveau.$dirty && !recipe.niveau.required">Le champs est requis</span>
    </div>

    <div class="form-group">      
      <label for="personnes">Nombre de convives :</label>
      <input
        type="number"
        min="1" max="10"
        v-model.number="recipe.personnes"
        id="personnes"
        placeholder="Ex: 6"
      >
    </div>

    <div class="form-group">      
      <label for="tempsPreparation">Temps de préparation :</label>
      <input
        type="number"
        v-model.number="recipe.tempsPreparation"
        id="tempsPreparation"
        placeholder="Ex: 45"
      >
    </div>

    <div class="ingredients">
      <label for="ingredient">Ingrédient :</label>
      <div class="form-group" v-for="(ingredient, index) in recipe.ingredients" :key="index">
      <input type="text" placeholder="Exemple : 100g" v-model="ingredient[0]">
      <input type="text" placeholder="Exemple : de farine" v-model="ingredient[1]">
      <button class="button" @click.prevent="removeIngredient(index)">❌</button>
    </div>
  </div>
  <div>Ajouter un ingrédient 
    <button class="button" @click.prevent="addIngredient">➕</button>
  </div>

  <div id="addEtape">
    <label for="etapes">Etapes :</label>
      <div class="form-group" v-for="(etapes, index) in recipe.etapes" :key="index">
      <input type="text" placeholder="Exemple : Peser la farine" v-model="recipe.etapes[index]">
      <button class="button" @click.prevent="removeEtape(index)">❌</button>
    </div>
  </div>
  <div>Ajouter une étape
    <button class="button" @click.prevent="addEtape">➕</button>
  </div>

    <div class="actions">
      <button type="submit" class="btn">Envoyer</button>
    </div>
  </form>
</template>

<script>
import { required, alpha, url } from "vuelidate/lib/validators";

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
      photo: { url },
      titre: { required },
      description: { required, alpha },
      niveau: { required, alpha },
      personnes: { required },
      tempsPreparation: { required },
      ingredients: { required },
      etapes: { required },
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
      console.log(index);
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
form input{
  background: white;
  text-align: left;
}
.recipeform {
  margin: 2em 0;
}

.recipeform .form-group {
  margin-bottom: 1.2em;
}

.recipeform label {
  display: flex;
  flex-flow: column;
  vertical-align: middle;
  min-width: 150px;
}
.recipeform input[type="radio"] + label {
  min-width: 0;
  text-align: left;
  cursor: pointer;
}

.recipeform input:not([type="radio"]) {
  min-width: 200px;
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
