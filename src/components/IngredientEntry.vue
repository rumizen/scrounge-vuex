<template>
	<form>
		<label for="flavor">Enter ingredient</label>
		<input @keyup="changed" name="ingredient">
	</form>
</template>

<script>
import { store } from "../store";
import { mapActions } from 'vuex'

export default {
	name: "IngredientEntry",
	store,
	methods: {
		...mapActions( {
      setRecipes: 'setRecipes'
    } ),
    changed: function(e) {
			if (e.keyCode === 13) {
				// submit ingredient to apiCall
			}
      this.$store.commit('change', event.target.value)
    }
  }
};
</script>

<style scoped lang="scss">

</style>
