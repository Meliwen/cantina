<template>
  <div id="app">
    <Navbar/>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "app",
  components: {
    Navbar
  }
};
</script>

<style>
/* MISE EN FORME */
body {
  margin: 0;
  background-color: #ebe9e1;
}
h1{
  font-family: 'ar_destineregular';
  font-size: 60px;
}
.container {
  max-width: 1152px;
  margin: 0 auto;
}

.centered {
  text-align: center;
}

.actions {
  margin-top: 1.4em;
}
/* ---- /MISE EN FORME ---- */

/* TEXTE */
@font-face {
  font-family: 'ar_destineregular';
  src: url('fonts/ardestine-webfont.woff2') format('woff2'),
        url('fonts/ardestine-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;

}
html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
/* ---- /TEXTE ---- */

/* BOUTONS */
.bouton {
  background-color: #424242;
  color: #ffffff;
  padding: 2% 7%;
  border: 1px solid rgb(233, 233, 233);
  border-radius: 0.5rem;
}
.bouton:hover {
  background-color: rgb(233, 233, 233);
  color: #000000;
  transform: scale(1.05);
}
/* ---- /BOUTONS ---- */

/* FORMULAIRE */
form input, form select {
  padding: 0.5em 0.9em;
  border-radius: 2px;
  border: thin solid #c0c0c0;
  background: linear-gradient(to bottom, #e6e6e6 0%, transparent 20%);
}
/* ---- /FORMULAIRE ---- */
</style>
