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
div {
  display: flex;
  justify-content: center;
}
section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  width: 50%;
  flex-wrap: wrap;
}
</style>
