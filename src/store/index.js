import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    recipes: [],
    ingredients: []
  },
  mutations: {
    updateRecipes(state, recipes) {
      state.recipes = recipes;
    }
  },
  getters: {
    recipes: state => state.recipes
  },
  actions: {
    setRecipes(context, recipes) {
      context.commit("updateRecipes", recipes)
    }
  },
  modules: {}
});
