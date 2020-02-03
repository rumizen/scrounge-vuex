<template>
  <header>
    <div class="scrounge-logo">
      <h1>Scrounge</h1>
      <h4>Cook with what you've got</h4>
    </div>
		<div class="icons-container">
			<img src="../assets/github.png" />
			<img src="../assets/linkedin.png" />
			<img src="../assets/instagram.png" />
		</div>
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
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 0rem;
  background-color: $lightNeutral;
  width: 100vw;
}
.scrounge-logo {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-left: 2rem;
}
.icons-container {
	margin-right: 2rem;
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
img {
	height: 2rem;
	margin-left: .25rem;
	transition: all .25s;
	&:hover {
		cursor: pointer;
		opacity: .9;
	}
}

@media only screen and (max-width: 700px) {
  img {
		height: 1.5rem;
	}
	h1 {
  	font-size: 2rem;
	}
	h4 {
  	font-size: .5rem;
	}
}
</style>
