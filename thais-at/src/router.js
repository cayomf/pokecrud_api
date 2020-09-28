import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import CreatePokemon from '../src/components/CreatePoke.vue'
import DetailsPokemon from '../src/components/DetailsPoke.vue'
// import Carrinho from './components/Carrinho' 

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes:[
        {
            path:'/',
            name: 'home',
            component: Home
        },
        {
            path:'/createPokemon',
            name: 'createPokemon',
            component: CreatePokemon,
        },
        {
            path:'/details',
            name: 'details',
            component: DetailsPokemon,
        },
        
    ]
});