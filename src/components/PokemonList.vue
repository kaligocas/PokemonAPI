<script setup lang="ts">
import { reactive } from "vue";
import PokemonCard from "@/components/PokemonCard.vue";
let pokemons = reactive([]);
async function getList() {
	const response = await fetch(
		`https://pokeapi.co/api/v2/pokemon/?limit=1292&offset=0`
	);
	const data = await response.json();
	let pokemons = data.results;
}
getList();
</script>
<template>
	<ul>
		<li v-for="pokemon in list">
			<p>{{ pokemon.name }}</p>
		</li>
	</ul>
</template>
