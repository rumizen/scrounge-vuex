<template>
  <div id="app">
    <Header />
    <IngredientEntry />
    <RecipesContainer />
  </div>
</template>

<script>
import Header from "./components/Header";
import IngredientEntry from "./components/IngredientEntry";
import RecipesContainer from "./components/RecipesContainer";

export default {
  name: "App",
  components: {
    Header,
    IngredientEntry,
    RecipesContainer
  }
};
</script>

<style lang="scss"></style>
