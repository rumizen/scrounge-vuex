<template>
  <form>
    <label for="flavor">Enter ingredient</label>
    <input @change="handleChange" name="ingredient" />
    <button @click="handleClick">Add</button>
  </form>
</template>

<script>
import { store } from "../store";
import { mapActions } from "vuex";

export default {
  name: "IngredientEntry",
  store,
  data: function() {
    return {
      input: ""
    };
  },
  methods: {
    ...mapActions({
      setRecipes: "setRecipes"
    }),
    handleChange: function(e) {
			this.input = e.target.value;
    },
    handleClick: function(e) {
      e.preventDefault();
      this.$store.dispatch("setRecipes", this.input);
    }
  }
};
</script>

<style scoped lang="scss"></style>
