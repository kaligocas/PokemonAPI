import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { PokemonData } from '../assets/types/PokemonData'
import type { PokemonList } from '@/assets/types/PokemonList'
let pageCount = 0
const POKEMONS_PER_PAGE = 6

export const usePokemonStore = defineStore('pokemons', {
    state: () => ({
        pokemons: [],
    }),
    getters: {
        getPokemons(state){
            return state.pokemons
        }
    },
    actions: {
        async fetchPokemonAPI() {
            try {
                const data: PokemonData = await fetch(`https://pokeapi.co/api/v2/ability/?limit=${POKEMONS_PER_PAGE}&offset=${pageCount*POKEMONS_PER_PAGE }`)
                const pokemons : PokemonList = data.results
            }
            catch(error) {
                alert(error)
                console.log(error)
            }
        }
    }
}) 