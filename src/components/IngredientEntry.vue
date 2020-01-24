<template>
  <form>
    <input @change="handleChange" name="ingredient" placeholder="Add an ingredient" />
    <button @click="handleClick">Add</button>
  </form>
</template>

<script>
import { store } from "../store/store";
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
			setRecipes: "setRecipes",
			setIngredient: "setIngredient"
    }),
    handleChange: function(e) {
			this.input = e.target.value;
    },
    handleClick: function(e) {
      e.preventDefault();
			this.$store.dispatch("setIngredient", this.input);
			this.$store.dispatch("setRecipes");
    }
  }
};
</script>

<style scoped lang="scss">
@import "../variables.scss";
form {
	display: flex;
	flex-direction: column;
	align-items: center;
}
label {
	font-size: 1rem;
}
input {
	width: 30%;
	height: 2.75rem;
	border-radius: .25rem;
	border: none;
	outline: none;
	font-size: .9rem;
	font-weight: 300;
	padding-left: .5rem;
	transition: all .25s;
	&:hover {
		box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
	}
}
button {
	width: 15%;
	height: 2.75rem;
	border-radius: .25rem;
	border: none;
	outline: none;
	background-color: $tertiary;
	color: white;
	font-family: "Roboto", sans-serif;
	font-size: 1rem;
	font-weight: 300;
	margin: 1rem;
	transition: all .25s;
	&:hover {
		cursor: pointer;
		box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
	}
}
</style>
