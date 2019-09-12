<template>
  <nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand" href="#">Cantina</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link to="/list">Liste des recettes</router-link>
        <router-link to="/add">Ajouter une recette</router-link>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
background-color: grey;
  overflow: hidden;
  margin-bottom: 3em;
}

.navbar > .container {
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
}

.navbar a:link,
.navbar a:visited {
  color:  #fff;
  text-decoration: none;
  display: inline-block;
  padding: 0.75em 1em;
  transition: all 150ms;
  transform: scale(1);
}
.navbar a:hover {
  background-color: #fff;
  color: black;
  transform: scale(1.05);
}
.navbar a.router-link-exact-active {
  background-color: rgb(48, 48, 48);
}

.navbar a:active {
  transition: none;
  color:  rgb(0, 0, 0);
  background-color: #fff;
}

.navbar a:last-of-type {
  margin-left: auto;
}
</style>
