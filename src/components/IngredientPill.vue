<template>
  <article v-bind:id="title">
    <p>{{ title }}</p>
    <img src="../assets/close.png" />
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
  article {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid lightgreen;
    border-radius: 40px;
    padding: .25rem .5rem;
    transition: all .25s;
    &:hover {
      cursor: pointer;
      opacity: .6;
    }
  }
  p {
    font-size: 1rem;
    margin: 0;
  }
  img {
    height: 1rem;
    margin-left: .5rem;
  }
</style>
