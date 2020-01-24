<template>
  <div>
    <section>
      <IngredientPill
        v-for="ingredient in ingredients"
        v-bind:key="ingredient"
        v-bind:title="ingredient"
      />
    </section>
  </div>
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
    padding: .5rem;
  }

</style>
