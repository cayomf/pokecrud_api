<template>
  <div class="home">
    <b-navbar class="nav" variant="red">
      <b-navbar-brand :to="{name: 'home' }">
        <h1 class="navH1">Pokemon</h1>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{ name: 'createPokemon'  }">
            <h6 class="navItem">
              Adicionar Pokemon
            </h6>
          </b-nav-item>
        </b-navbar-nav>
</b-collapse>
    </b-navbar>


    <router-view></router-view>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap-vue/dist/bootstrap-vue-icons.min.css";
// import Home from "../src/components/Home"
// import CreatePoke from "../src/components/CreatePoke"
// import DetailsPoke from "../src/components/DetailsPoke"
// import RemovePoke from "../src/components/RemovePoke"
// import UpdatePoke from "../src/components/UpdatePoke"

export default {
  name: "App",
  components: {
    // Home,
    // CreatePoke,
    // RemovePoke,
    // UpdatePoke,
    // DetailsPoke
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.navbar{
  flex-wrap: wrap !important;
}
.nav {
  background: red;
}
.navH1 {
  color: yellow;
}
.navItem {
  color: yellow;
}
.mr-sm-2 {
  width: 40%;
}

</style>
