import Vue from "vue";
import Vuex from "vuex";
import { getRecipes } from "../apiCalls";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    recipes: [],
    ingredients: []
  },
  mutations: {
    updateRecipes(state, recipes) {
      state.recipes = recipes;
    },
    addIngredient(state, ingredient) {
      state.ingredients = [...state.ingredients, ingredient];
    }
  },
  getters: {
    recipes: state =>
      state.recipes.map(recipe => ({
        title: recipe.title,
        image: recipe.image,
        id: recipe.id
      }))
  },
  actions: {
    async setRecipes({ commit }, ingredient) {
      const recipes = await getRecipes(ingredient);
      commit("updateRecipes", recipes);
    }
  },
  modules: {}
});
