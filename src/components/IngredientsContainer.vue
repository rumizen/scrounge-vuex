<template>
    <section>
      <IngredientPill
        v-for="ingredient in ingredients"
        v-bind:key="ingredient"
        v-bind:title="ingredient"
      />
    </section>
</template>

<script>
import { store } from "../store/store";
import { mapGetters } from "vuex";
import IngredientPill from "./IngredientPill";

export default {
  name: "IngredientsContainer",
  components: { IngredientPill },
  store,
  computed: {
    ...mapGetters(["ingredients"])
  }
};
</script>

<style scoped lang="scss">
section {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin: 0rem 1rem 0rem 0rem;
}
@media only screen and (max-width: 600px) {
  section {
    margin: 0rem 2rem;
  }
}
</style>
