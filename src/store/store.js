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
    setIngredient({ commit }, ingredient) {
      commit("addIngredient", ingredient);
    }
  },
  modules: {}
});
