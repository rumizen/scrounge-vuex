import axios from "axios";

const baseUrl = "https://api.spoonacular.com/";

export const getRecipes = async ingredients => {
  const response = await axios.get(
    `${baseUrl}recipes/findByIngredients?ingredients=${ingredients}?ignorePantry=true?ranking=1`,
    { params: { apiKey: "26d2ac10e9714fbe9783a0dbc69e8e2f" } }
  );
  const results = response.data;
  return results;
};

export const getFullRecipe = async id => {
  const response = await axios.get(
    `${baseUrl}recipes/${id}/information?includeNutrition=false`,
    { params: { apiKey: "26d2ac10e9714fbe9783a0dbc69e8e2f" } }
  );
  const results = response.data;
  return results;
};

export const getRecipeIngredients = async id => {
  const response = await axios.get(
    `${baseUrl}recipes/${id}/ingredientWidget.json`,
    { params: { apiKey: "26d2ac10e9714fbe9783a0dbc69e8e2f" } }
  );
  const results = response.data.ingredients;
  return results;
};

export const getRecipeSteps = async id => {
  const response = await axios.get(
    `${baseUrl}recipes/${id}/analyzedInstructions`,
    { params: { apiKey: "26d2ac10e9714fbe9783a0dbc69e8e2f" } }
  );
  // some responses don't have the same file structure (response.data is undefined)

  const results = response.data;
  return results;
};