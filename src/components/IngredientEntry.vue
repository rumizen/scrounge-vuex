<template>
  <form>
    <input @change="handleChange" name="ingredient" placeholder="Enter an ingredient" v-bind:value="this.input" />
    <button :disabled="this.input === ''" @click="handleClick">Add</button>
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
			this.input = "";
		}
  }
};
</script>

<style scoped lang="scss">
@import "../variables.scss";
form {
	width: 20%;
	min-width: 200px;
	height: 3rem;
	margin: 0rem 2rem 0rem 2rem;
	display: flex;
	border-radius: .25rem;
	box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
}
input {
	width: 90%;
	height: 95%;
	border-radius: .25rem 0rem 0rem .25rem;
	border: none;
	outline: none;
	font-size: .9rem;
	font-weight: 300;
	padding-left: .5rem;
	transition: all .25s;
}
button {
	width: 60px;
	height: 100%;
	border-radius: 0rem .25rem .25rem 0rem;
	border: none;
	outline: none;
	background-color: $tertiary;
	opacity: .5;
	color: white;
	font-family: "Roboto", sans-serif;
	font-size: 1rem;
	font-weight: 300;
	transition: all .25s;
	&:hover {
		cursor: pointer;
		opacity: 1;
	}
}

@media only screen and (max-width: 600px) {
  form {
    margin-bottom: 1rem;
  }
}
</style>
