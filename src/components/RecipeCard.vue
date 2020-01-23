<template>
  <article v-bind:id="id">
    <h5>{{ title }}</h5>
    <img v-bind:src="image" />
  </article>
</template>

<script>
export default {
  name: "RecipeCard",
  props: {
    title: String,
    image: String,
    id: String
  }
};
</script>

<style scoped lang="scss"></style>
