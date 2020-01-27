<template>
  <section :id="id" class="full-recipe-wrapper">
    <h2>{{ selectedRecipe.title }}</h2>
    <ul class="ingredients-list">
      <li
        v-for="ingredient in selectedRecipeIngredients"
        :key="ingredient"
        class="list-item-wrapper"
      >
        <h4>{{ ingredient.name }}</h4>
        <p>
            {{ ingredient.amount.us.value }}
            {{ ingredient.amount.us.unit }}
        </p>
      </li>
    </ul>
    <ul class="steps-list">
      <li
        v-for="step in selectedRecipeSteps[0].steps"
        :key="step"
        class="list-item-wrapper step-item-wrapper"
      >
        <h4>Step {{ step.number }}</h4>
        <p>{{ step.step }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
import { store } from "../store/store";
import { mapState } from "vuex";

export default {
  name: "OpenRecipe",
  store,
  computed: {
    ...mapState({
      selectedRecipe: "selectedRecipe",
      selectedRecipeIngredients: "selectedRecipeIngredients",
      selectedRecipeSteps: "selectedRecipeSteps",
    })
  }
};
</script>

<style scoped lang="scss">
@import "../variables.scss";

.full-recipe-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 30vw;
}
.ingredients-list,
.steps-list {
  list-style: none;
  width: 90%;
  padding: 0;
}
.list-item-wrapper {
  display: flex;
  justify-content: space-between;
  h4 {
    margin: 0;
  }
  p {
    margin: 0;
  }
}
.step-item-wrapper {
  flex-direction: column;
}
</style>
