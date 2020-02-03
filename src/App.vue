<template>
  <main id="app">
    <Header />
    <div class="sticky-container">
      <IngredientEntry />
      <p class="default-message" v-if="renderDefaults">
        We'll show you recipes that match the ingredients you have.
      </p>
      <IngredientsContainer v-if="!renderDefaults" />
    </div>
    <div class="recipe-section-wrapper">
      <div class="home-image" v-if="renderDefaults">
        <h4>Turn the food you have left into the meal you'll make again.</h4>
      </div>
      <div v-if="!renderDefaults && selectedRecipe" class="open-recipe-wrapper">
        <div class="toggle-icon-wrapper" @click="handleClick">
          <p class="toggle-text" v-if="!openRecipe">Open</p>
          <p class="toggle-text" v-if="openRecipe">Close</p>
          <div id="toggle-icon" :class="{ open: openRecipe }">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <section class="inner-recipe-section">
          <RecipesContainer v-if="!renderDefaults" />
          <transition name="slide">
            <OpenRecipe v-if="openRecipe" class="toggle-recipe-container" />
          </transition>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
import Header from "./components/Header";
import IngredientEntry from "./components/IngredientEntry";
import RecipesContainer from "./components/RecipesContainer";
import IngredientsContainer from "./components/IngredientsContainer";
import OpenRecipe from "./components/OpenRecipe";
import { store } from "./store/store";
import { mapActions } from "vuex";
import { mapState } from "vuex";

export default {
  name: "App",
  store,
  components: {
    Header,
    IngredientEntry,
    RecipesContainer,
    IngredientsContainer,
    OpenRecipe
  },
  computed: {
    ...mapState({
      recipeIsOpen: "recipeIsOpen",
      selectedRecipe: "selectedRecipe"
    }),
    openRecipe() {
      return this.$store.state.recipeIsOpen;
    },
    renderDefaults() {
      return this.$store.state.ingredients.length === 0;
    }
  },
  methods: {
    ...mapActions({
      toggleOpenRecipe: "toggleOpenRecipe"
    }),
    handleClick: function() {
      this.$store.dispatch("toggleOpenRecipe", !this.recipeIsOpen);
    }
  }
};
</script>

<style lang="scss">
@import "./variables.scss";
body {
  margin: 0;
}
main {
  font-family: "Roboto", sans-serif;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sticky-container {
  display: flex;
  position: sticky;
  z-index: 100;
  top: 0;
  padding: 1rem;
  width: 100vw;
  background-color: $lightNeutral;
  box-shadow: 0px 8px 9px -9px rgba(0, 0, 0, 0.75);
}
.default-message {
  color: $primary;
  font-weight: 100;
}
.recipe-section-wrapper {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 80vh;
}
.home-image {
  background: url("./assets/fridge-large.jpg");
  width: 100vw;
  height: 100%;
  position: relative;
  z-index: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top right;
  animation: fadeIn 2s;
  display: flex;
  align-items: center;
  h4 {
    font-size: 2rem;
    font-weight: 300;
    color: $primary;
    width: 25vw;
    margin-left: 10vw;
  }
}

.inner-recipe-section {
  display: flex;
  margin-top: .5rem;
}

.open-recipe-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  z-index: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.4s ease;
}

.toggle-icon-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 1rem -.25rem 0rem;
  height: 20px;
  cursor: pointer;
  .toggle-text {
    margin: 0;
    margin-right: 0.75rem;
    margin-bottom: 0.25rem;
    color: $primary;
    font-weight: 300;
    font-size: 1rem;
  }
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
  transition: all 0.4s ease-in 0s;
}

#toggle-icon {
  width: 20px;
  height: 20px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
}

#toggle-icon span {
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  background: $primary;
  border-radius: 9px;
  opacity: 1;
  right: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}

#toggle-icon span:nth-child(1) {
  top: 0px;
}

#toggle-icon span:nth-child(2),
#toggle-icon span:nth-child(3) {
  top: 7px;
}

#toggle-icon span:nth-child(4) {
  top: 14px;
}

#toggle-icon.open span:nth-child(1) {
  top: 14px;
  width: 0%;
  left: 50%;
}

#toggle-icon.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

#toggle-icon.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

#toggle-icon.open span:nth-child(4) {
  top: 18px;
  width: 0%;
  left: 50%;
}

@media only screen and (max-width: 700px) {
  .sticky-container {
    flex-direction: column;
    align-items: center;
  }
  .default-message {
    width: 85vw;
    text-align: center;
    font-size: 0.8rem;
  }
  .home-image {
    background: url("./assets/fridge-small.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    h4 {
      display: none;
    }
  }
}
</style>
