<template>
    <b-row id="row">
      <div id="cards">
        <b-card
          id="card"
          :title="poke.name"
          :img-src="poke.imageUrl"
          :img-alt="poke.description"
          img-top
          tag="article"
          style="max-width: 300px;"
          class="mb-4 text-center"
          :key="poke._id"
          v-for="poke in allPokes"
        >
          <b-card-text>{{poke.description}}</b-card-text>

          <b-button  variant="outline-secondary" :to="{ name: 'details', params: { poke } }">Info</b-button>
        </b-card>
      </div>
    </b-row>
    

</template>

<script>
// eslint-disable-next-line no-unused-vars
import Item from '../App'
import { mapActions , mapGetters } from "vuex";

export default {
  name: "Home",
  
  mounted () {
    
  },

  methods: {
    ...mapActions(["getAll"])
  },

  computed: mapGetters(["allPokes"]),

  created () {
    //console.log(getAll())
    this.getAll();
  }
  
};
</script>

<style scoped>
#cards {
  margin-top: 40px;
  display: flex;
  flex-wrap: inherit;
  align-items: center;
  /* justify-content: space-between; */
  margin: 5%;
}
#row {
  width: 95%;
  margin: auto;
}
#row div h1 {
  color: white;
  margin: auto;
}
#card {
  margin: 10px;
  width: 300px;
  /* height: 610px; */
}
#p-titulo {
  font-size: 10px;
  color: white;
}
#teste {
  color: white;
  margin-left: 35%;
}
input{
  width: 200px;
}

.navbar {
  flex-wrap: wrap !important;
}
@media (max-width: 380px){
  #teste{
  color: white;
  margin: 5%;
}
  input{
    width: 80%;
    display: block;
  }
  b-nav-form{
    width: 200px
  }
}

</style>