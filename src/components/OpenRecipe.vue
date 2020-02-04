<template>
  <section class="full-recipe-wrapper">
    <h2>{{ selectedRecipe.title }}</h2>
    <p>Original recipe by <a :href="selectedRecipe.sourceUrl" target="_blank">{{ selectedRecipe.sourceName }}</a></p>
    <img :src="selectedRecipe.image" />
    <h3>Ingredients</h3>
    <ul class="ingredients-list">
      <li
        v-for="ingredient in selectedRecipeIngredients"
        :key="ingredient"
        class="list-item-wrapper"
      >
        <h5>{{ ingredient.name }}</h5>
        <p>
          {{ ingredient.amount.us.value }}
          {{ ingredient.amount.us.unit }}
        </p>
      </li>
    </ul>
    <h3>Directions</h3>
    <p v-if="!selectedRecipeSteps.length > 0">No directions provided</p>
    <ul v-if="selectedRecipeSteps.length > 0" class="steps-list">
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
      recipeIsOpen: "recipeIsOpen"
    })
  }
};
</script>

<style scoped lang="scss">
@import "../variables.scss";

.full-recipe-wrapper {
  width: 450px;
  border-radius: 0.25rem 0rem;
  position: relative;
  top: 0;
  right: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: $lightNeutral;
  color: $primary;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  margin-top: .98rem;
  p {
    font-weight: 100;
    font-size: .9rem;
    margin: .25rem 0rem 1rem 0rem;
  }
  a {
    text-decoration: none;
    color: $tertiary;
    font-weight: 300;
  }
}
h2 {
  margin: 1rem 0rem 0rem 0rem;
  font-size: 1.2rem;
  font-weight: 500;
}
h3 {
  margin: 10px;
  font-size: 1.2rem;
  font-weight: 400;
}
img {
  width: 95%;
  border-radius: 0.25rem;
  margin-bottom: .5rem;
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
  margin-bottom: 7px;
  h4 {
    margin-bottom: 10px;
    margin-top: 10px;
    font-weight: 400;
  }
  h5 {
    margin: 0;
    font-weight: 400;
  }
  p {
    margin: 0;
    font-weight: 100;
    font-size: .75rem;
  }
}
.step-item-wrapper {
  flex-direction: column;
  p {
    margin: 0;
    font-weight: 100;
    font-size: 1rem;
  }
}
</style>
