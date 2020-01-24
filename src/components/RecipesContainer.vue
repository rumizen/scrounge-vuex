<template>
  <div>
    <section class="recipe-container">
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

<style scoped lang="scss">
@import "../variables.scss";
.recipe-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
div {
  width: 90%;
}
</style>
