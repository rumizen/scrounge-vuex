import axios from "axios";
// import {apiKey} from "./apiKey";

const baseUrl = "https://api.spoonacular.com/";
// const apiKey = process.env.API_KEY;
const apiKey = "26d2ac10e9714fbe9783a0dbc69e8e2f";

export const getRecipes = async ingredients => {
  const response = await axios.get(
    `${baseUrl}recipes/findByIngredients?ingredients=${ingredients}?ignorePantry=true?ranking=1`,
    { params: { apiKey } }
  );
  const results = response.data;
  console.log(results)
  return results;
};

export const getFullRecipe = async id => {
  const response = await axios.get(
    `${baseUrl}recipes/${id}/information?includeNutrition=false`,
    { params: { apiKey } }
  );
  const results = response.data;
  return results;
};

export const getRecipeIngredients = async id => {
  const response = await axios.get(
    `${baseUrl}recipes/${id}/ingredientWidget.json`,
    { params: { apiKey } }
  );
  const results = response.data.ingredients;
  return results;
};

export const getRecipeSteps = async id => {
  const response = await axios.get(
    `${baseUrl}recipes/${id}/analyzedInstructions`,
    { params: { apiKey } }
  );
  // some responses don't have the same file structure (response.data is undefined)

  const results = response.data;
  return results;
};