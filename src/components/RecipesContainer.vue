<template>
  <div>
    <h4>Recipes that use your ingredients</h4>
    <section>
      <RecipeCard
        v-for="recipe in recipes"
        v-bind:key="recipe"
        v-bind:title="recipe.title"
        v-bind:image="recipe.image"
        v-bind:id="recipe.id"
      />
    </section>
  </div>
</template>

<script>
import { store } from "../store/store";
import { mapGetters } from "vuex";
import RecipeCard from "./RecipeCard";

export default {
  name: "RecipesContainer",
  components: { RecipeCard },
  store,
  computed: {
    ...mapGetters(["recipes"])
  }
};
</script>

<style scoped lang="scss"></style>
