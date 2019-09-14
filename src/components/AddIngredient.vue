<template>
  <div id="addIngredient">
      <div class="form-group" v-for="(ingredient, index) in recipe.ingredients" :key="index">
      <label for="ingredient">Ingrédient :</label>
      <input type="text" id="quantite" placeholder="Exemple : 100g"  >
      <input type="text" id="nom_ingredient" placeholder="Exemple : de farine">
    </div>
    <div>Ajouter un ingrédient 
      <button class="button" @click="addRow">➕</button>
    </div>
  </div>
</template>

<script>
export default {
    name: "addIngredient",
    props: {
      recipe: {
        type: Object,
        default: function(){
          return {
            ingredients: []
          }
        }
      }
  },
  methods: {
    addRow: function () {
      this.recipe.ingredients.push({
        value: "ingredient"});
    }
  }
}
</script>
<style scoped>
body {
  background: #20262E;
  padding: 20px;
  font-family: Helvetica;
}

#app {
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  transition: all 0.2s;
}

li {
  margin: 8px 0;
}

h2 {
  font-weight: bold;
  margin-bottom: 15px;
}

del {
  color: rgba(0, 0, 0, 0.3);
}
</style>