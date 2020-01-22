<template>
  <div>
    <h4>Recipes that use your ingredients</h4>
  </div>
</template>

<script>
import { store } from "../store";
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
