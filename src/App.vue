<template>
  <main id="app">
    <Header />
    <IngredientEntry />
    <IngredientsContainer />
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

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap');
main {
  font-family: "Roboto", sans-serif;
}
</style>
