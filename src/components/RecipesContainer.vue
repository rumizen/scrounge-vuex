<template>
  <div>
    <h4>Recipes that use your ingredients</h4>
    <ul>
      <li v-for="recipe in recipes" v-bind:key="recipe" v-bind:id="recipe.id">
        <h5>{{ recipe.title }}</h5>
        <img v-bind:src="recipe.image" />
      </li>
    </ul>
  </div>
</template>

<script>
import { store } from "../store/store";
import { mapGetters } from 'vuex'

export default {
  name: "RecipesContainer",
  store,
  computed: {
    ...mapGetters(["recipes"])
  }
};
</script>

<style scoped lang="scss"></style>
