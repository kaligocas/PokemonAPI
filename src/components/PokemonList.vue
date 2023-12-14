<script setup lang="ts">
import { reactive, ref } from "vue";
import PokemonCard from "./PokemonCard.vue";
import { getPokemons } from "@/assets/modules/getPokemons";

let pokemons = reactive([]);
let isLoaded = ref(false);

async function getData() {
	pokemons = await getPokemons();
	isLoaded.value = true;
}

getData();
</script>

<template>
	<section>
		<ul type="none" class="pokemon__list">
			<PokemonCard
				v-if="isLoaded"
				v-for="pokemon in pokemons"
				:pokemon="pokemon"
			/>
		</ul>
	</section>
</template>

<style scoped lang="scss">
.pokemon__list {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 2rem;
	padding: 2rem;
}

section {
	padding: 1rem;
	border-radius: 2rem;
	background-color: rgba(255, 255, 255, 0.4);
	backdrop-filter: blur(5px);
}
</style>
