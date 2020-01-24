<template>
  <main id="app">
    <Header />
    <div class="sticky-container">
      <IngredientEntry />
      <IngredientsContainer />
    </div>
    <RecipesContainer />
  </main>
</template>

<script>
import Header from "./components/Header";
import IngredientEntry from "./components/IngredientEntry";
import RecipesContainer from "./components/RecipesContainer";
import IngredientsContainer from "./components/IngredientsContainer";

export default {
  name: "App",
  components: {
    Header,
    IngredientEntry,
    RecipesContainer,
    IngredientsContainer
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
  background-color: $lightNeutral;
  height: 100vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sticky-container {
  position: sticky;
  top: 0;
  padding: 2rem;
  width: 100%;
}
</style>
