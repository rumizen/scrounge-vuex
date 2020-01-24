<template>
  <div id="app">
    <Header />
    <IngredientEntry />
    <IngredientsContainer />
    <RecipesContainer />
  </div>
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

<style lang="scss"></style>
