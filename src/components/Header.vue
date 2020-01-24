<template>
  <header>
    <h1>Scrounge</h1>
    <h4>Cook with what you've got</h4>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans|Poiret+One&display=swap");
@import "../variables.scss";
header {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
h1 {
	font-family: "Poiret One", cursive;
	font-size: 2.75rem;
	margin: 0;
	color: $primary;
}
h4 {
	margin: 0;
	font-weight: 100;
	font-size: .95rem;
	color: $tertiary;
}
</style>
