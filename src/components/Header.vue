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
@import "../variables.scss";
header {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: .25rem 0rem;
	background-color: $lightNeutral;
	width: 100vw;
}
h1 {
	font-family: "Poiret One", cursive;
	font-size: 3rem;
	margin: 0;
	color: $primary;
}
h4 {
	margin: 0;
	font-weight: 100;
	font-size: 1rem;
	color: $tertiary;
}
</style>
