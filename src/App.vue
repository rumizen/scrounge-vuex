<template>
  <main id="app">
    <Header />
    <div class="sticky-container">
      <IngredientEntry />
      <IngredientsContainer />
    </div>
    <div class="recipe-section-wrapper">
      <RecipesContainer />
      <OpenRecipe v-if="openRecipe" />
    </div>
  </main>
</template>

<script>
import Header from "./components/Header";
import IngredientEntry from "./components/IngredientEntry";
import RecipesContainer from "./components/RecipesContainer";
import IngredientsContainer from "./components/IngredientsContainer";
import OpenRecipe from "./components/OpenRecipe";
import { store } from "./store/store";

export default {
  name: "App",
  store,
  components: {
    Header,
    IngredientEntry,
    RecipesContainer,
    IngredientsContainer,
    OpenRecipe
  },
  computed: {
    openRecipe() {
      return this.$store.state.selectedRecipe;
    }
  }
};
</script>

<style lang="scss">
@import "./variables.scss";
body {
  margin: 0;
}
main {
  font-family: "Roboto", sans-serif;
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sticky-container {
  display: flex;
  position: sticky;
  z-index: 100;
  top: 0;
  padding: 1rem;
  width: 100vw;
  background-color: $lightNeutral;
  box-shadow: 0px 8px 9px -9px rgba(0, 0, 0, 0.75);
}
.recipe-section-wrapper {
  display: flex;
}

@media only screen and (max-width: 600px) {
  .sticky-container {
    flex-direction: column;
  }
}
</style>
