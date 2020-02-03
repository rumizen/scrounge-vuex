<template>
  <article
    @click="handleClick"
    :id="id"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <div class="title-gradient">
      <h5>{{ title }}</h5>
    </div>
  </article>
</template>

<script>
import { store } from "../store/store";
import { mapActions } from "vuex";

export default {
  name: "RecipeCard",
  store,
  props: {
    title: String,
    image: String,
    id: String
  },
  methods: {
    ...mapActions({
      setSelectedRecipe: "setSelectedRecipe",
      toggleOpenRecipe: "toggleOpenRecipe"
    }),
    handleClick: function() {
      this.$store.dispatch("setSelectedRecipe", this.id);
      if (!this.$store.state.recipeIsOpen) {
        this.$store.dispatch(
          "toggleOpenRecipe",
          !this.$store.state.recipeIsOpen
        );
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "../variables.scss";
article {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 15rem;
  width: 20rem;
  margin: 1rem;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  border-radius: 0.25rem;
  animation: fadeIn 2s;
  transition: all 0.25s;
  &:hover {
    cursor: pointer;
    box-shadow: none;
    opacity: 0.8;
  }
}
h5 {
  color: white;
  font-weight: 300;
  font-size: 1rem;
  margin: 0.75rem;
  text-align: center;
}
.title-gradient {
  height: 100%;
  width: 100%;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) 70%,
    rgba(0, 0, 0, 0.8) 100%
  );
  border-radius: 0.25rem;
}
</style>
