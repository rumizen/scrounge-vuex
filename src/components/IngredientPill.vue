<template>
  <article v-bind:id="title">
    <p>{{ title }}</p>
    <img src="../assets/whiteX.png" />
  </article>
</template>

<script>
export default {
  name: "IngredientPill",
  props: {
    title: String
  }
};
</script>

<style scoped lang="scss">
@import "../variables.scss";

article {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4rem;
  background-color: $primary;
  color: white;
  font-weight: 100;
  padding: 0.3rem 0.55rem 0.4rem 0.9rem;
  height: 1.75rem;
  margin: .25rem;
  transition: all 0.25s;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
}
p {
  font-size: 1rem;
  margin: 0;
}
img {
  height: 1.2rem;
  margin-left: 0.5rem;
  position: relative;
  top: 1px;
}
</style>
