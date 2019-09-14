<template>
  <form class="recipeform" @submit.prevent="onSubmit">
   <div class="form-group">
     <label for="photo">Photo :</label>
      <input type="url" v-model.lazy="$v.recipe.photo.$model" id="photo" placeholder="http://">
      <span v-if="!$v.recipe.photo">L'URL est invalide</span>
    </div>
    <div class="form-group">      
      <label for="titre">Titre :</label>
      <input
        type="text"
        v-model="$v.recipe.titre.$model"
        @blur="$v.recipe.titre.$touch()"
        id="titre"
        placeholder="Titre de la recette"
      >
      <span v-if="$v.recipe.titre.$dirty && !$v.recipe.titre.required">Le champs est requis</span>
      <span
        v-if="$v.recipe.titre.$dirty && !$v.recipe.titre.required"
      >Le champs ne doit contenir que des lettres</span>
    </div>

    <div class="form-group">
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

    <div class="form-group">      
      <label for="personnes">Nombre de convives :</label>
      <input
        type="number"
        min="1" max="10"
        v-model="$v.recipe.personnes.$model"
        @blur="$v.recipe.personnes.$touch()"
        id="personnes"
        placeholder="Nombre de convives"
      >
      <span v-if="$v.recipe.personnes.$dirty && !$v.recipe.personnes.required">Le champs est requis</span>
    </div>

    <div class="form-group">
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

    <div class="form-group">      
      <label for="tempsPreparation">Temps de préparation en minutes :</label>
      <input
        type="number"
        v-model="$v.recipe.tempsPreparation.$model"
        @blur="$v.recipe.tempsPreparation.$touch()"
        id="tempsPreparation"
        placeholder="Exemple : 20 minutes"
      >
      <span v-if="$v.recipe.tempsPreparation.$dirty && !$v.recipe.tempsPreparation.required">Le champs est requis</span>
    </div>
  
    <addIngredient/>
    <addEtape/>
     

    <div class="actions">
      <button type="submit" class="btn">Envoyer</button>
    </div>
  </form>
</template>

<script>
import { required, alpha } from "vuelidate/lib/validators";
import addIngredient from "./AddIngredient.vue";
import addEtape from "./AddEtape.vue";

export default {
  name: "Form",
  components: {
    addIngredient,
    addEtape
  },
  props: {
    recipe: {
      type: Object,
      default: function() {
        return {
          id: null,
          description: "",
          titre: "",
          photo: "",
          personnes: null,
          ingredient: "",
          niveau:"",
          tempsPreparation: "",
        };
      }
    }
  },

  validations: {
    recipe: {
      description: { required },
      titre: { required, alpha },
      photo: {required},
      personnes: {required },
      ingredient: {required},
      niveau: {required, alpha},
      tempsPreparation:{required}
    }
  },

  methods: {
    onSubmit: function() {
      // Si les règles de l'objet 'recipe' sont invalides, on stoppe l'exécution de la fonction
      if (this.$v.recipe.$invalid) return this.$v.recipe.$touch();
      // Fait remonter un événement vers le composant parent
      this.$emit("send", this.recipe);
    },
    addIngredient: function(){
      
    }
  }
};
</script>

<style scoped>
.recipeform {
  margin: 2em 0;
}

.recipeform .form-group {
  margin-bottom: 1.2em;
}

.recipeform label {
  display: inline-block;
  vertical-align: middle;
  min-width: 150px;
  text-align: right;
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
