<template>
  <div class="details">
    <b-form @submit="updatePokemon">
      <div class="form-row">
        <div class="form-group">
          <label for="poke.imageUrl">URL da Imagem</label>
          <input
            type="text"
            class="form-control"
            id="form_email"
            placeholder="Cole a url da imagem"
            v-model.trim.lazy="poke.imageUrl"
          />
        </div>       
          <div class="form-group">
          <label for="poke.name">Nome</label>
          <input
            type="text"
            class="form-control"
            id="endereco"
            placeholder="Digite o nome do Pokemon"
            v-model.trim.lazy="poke.name"
          />
        </div>
        </div>       
          <div class="form-group">
          <label for="poke.type">Tipos</label>
          <b-form-select
            type="text"
            class="form-control"
            id="endereco"
            placeholder="Digite o nome do Pokemon"
            :options="themes"
            v-model.trim.lazy="poke.type"
          />
        </div>
        <div>       
          <div class="form-group">
          <label for="poke.description">Descricao</label>
          <input
            type="text"
            class="form-control"
            id="endereco"
            placeholder="Digite a descricao do Pokemon"
            v-model.trim.lazy="poke.description"
          />
        </div>
      </div>
       
    <b-button type="submit" class="btn-login" variant="info" >Salvar Pokemon!</b-button>

    </b-form> 
  <b-form @submit="deletePokemon">
        <b-button type="submit" class="btn-login" variant="info" >Deletar Pokemon</b-button>

  </b-form>
  </div>
</template>


<script>
import { mapActions } from "vuex";
import router from '../router'


export default {
  name: "details",
  data() {
    return {
      poke: {
        id: this.$route.params.poke._id,
        imageUrl: this.$route.params.poke.imageUrl,
        name: this.$route.params.poke.name,
        type: this.$route.params.poke.type,
        description: this.$route.params.poke.description,
        createdAt: this.$route.params.poke.createdAt
      },
      themes: [
        { valor: null, text: "Selecione uma opção" },
        { value: "Fogo", text: "Fogo" },
        { value: "Agua", text: "Agua" },
        { value: "Planta", text: "Planta" },
        { value: "Normal", text: "Normal" },
        { value: "Dragao", text: "Dragao" },
        { value: "Voador", text: "Voador" },
        { value: "Veneno", text: "Veneno" },
        { value: "Gelo", text: "Gelo" },
        { value: "Fantasma", text: "Fantasma" },
        { value: "Psiquico", text: "Psiquico" },
        { value: "Noturno", text: "Noturno" },
        { value: "Pedra", text: "Pedra" },
        { value: "Terra", text: "Terra" },
        { value: "Eletrico", text: "Eletrico" },
      ],
    };
  },
  methods:{
    ...mapActions(["updatePoke", "deletePoke"]),
    updatePokemon(){
      const poke = {
        _id: this.poke.id,
        imageUrl: this.poke.imageUrl,
        name: this.poke.name,
        type: this.poke.type,
        description: this.poke.description,
        createdAt: this.poke.createdAt
      }
      console.log(poke)
      this.updatePoke(poke)
      router.push({name: 'home'})
    },
    deletePokemon(){
      const poke = {
        _id: this.poke.id,
        imageUrl: this.poke.imageUrl,
        name: this.poke.name,
        type: this.poke.type,
        description: this.poke.description,
        createdAt: this.poke.createdAt
      }
      console.log(poke)
      this.deletePoke(poke._id)
      router.push({name: 'home'})
    }

  }
};
</script>

<style scoped>
  .form-group{
    margin: auto;
    margin-top: 40px;
    width: 51%;
  }
  .form-row{
    margin: auto;
  }
  .btn-register{
    margin: 40px;
    width: 20%;
    margin-bottom: 210px;
    margin-top: 40px;
  }
  .register, label{
    color: black;
    font-size: 20px;
    text-align: center;
  }
  .btn-login{
    width: 40%;
    margin-left: 30%;
    margin-right: 20%;
    margin-top: 5%;
  }
    .spaceBtn{
  margin: 5%;
}
</style>
