import Vue from "vue";
import Vuex from "vuex";
import { getRecipes, getFullRecipe, getRecipeIngredients, getRecipeSteps } from "../apiCalls";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    recipes: [],
    ingredients: [],
    selectedRecipe: null,
    selectedRecipeIngredients: [],
    selectedRecipeSteps: [],
    recipeIsOpen: false
  },
  mutations: {
    updateRecipes(state, recipes) {
      state.recipes = recipes;
    },
    addIngredient(state, ingredient) {
      state.ingredients = [...state.ingredients, ingredient];
    },
    deleteIngredient(state, ingredient) {
      const updateIngredients = state.ingredients.filter(
        ing => ing !== ingredient
      );
      state.ingredients = updateIngredients;
    },
    updateSelectedRecipe(state, recipe) {
      state.selectedRecipe = recipe;
    },
    updateSelectedRecipeIngredients(state, ingredients) {
      state.selectedRecipeIngredients = ingredients;
    },
    updateSelectedRecipeSteps(state, steps) {
      state.selectedRecipeSteps = steps;
    },
    toggleRecipe(state, toggle) {
      state.recipeIsOpen = toggle;
    }
  },
  getters: {
    recipes: state => {
      return state.recipes.map(recipe => ({
        title: recipe.title,
        image: recipe.image,
        id: recipe.id
      }));
    },
    ingredients: state => {
      return state.ingredients;
    },
    ingredientQuery: state => {
      let query = "";
      const ingredientList = state.ingredients;

      for (let i = 0; i < ingredientList.length; i++) {
        if (i === 0) {
          query = ingredientList[i];
        } else {
          query += `,+${ingredientList[i]}`;
        }
      }
      return query;
    }
  },
  actions: {
    async setRecipes({ commit, getters }) {
      const ingredientQuery = getters.ingredientQuery;
      const recipes = await getRecipes(ingredientQuery);
      commit("updateRecipes", recipes);
    },
    async setSelectedRecipe({ commit }, id) {
      const selectedRecipe = await getFullRecipe(id);
      const selectedRecipeIngredients = await getRecipeIngredients(id);
      const selectedRecipeSteps = await getRecipeSteps(id);
      commit("updateSelectedRecipe", selectedRecipe);
      commit("updateSelectedRecipeIngredients", selectedRecipeIngredients);
      commit("updateSelectedRecipeSteps", selectedRecipeSteps);
    },
    toggleOpenRecipe({ commit }, toggle) {
      commit("toggleRecipe", toggle);
    },
    setIngredient({ commit }, ingredient) {
      commit("addIngredient", ingredient);
    },
    removeIngredient({ commit }, ingredient) {
      commit("deleteIngredient", ingredient);
    }
  },
  modules: {}
});
