<script setup lang="ts">
import capitalizeFirstLetter from "@/assets/modules/capitalizeFirstLetter";
import type { Pokemon } from "@/assets/types/Pokemon";
import type { PokemonResponse } from "@/assets/types/PokemonResponse";
import { reactive, ref } from "vue";

const props = defineProps({
	pokemon: Object,
});

let pokemonDetails: Pokemon = reactive({});
let detailsLoaded = ref(false);

async function getPokemonDetails() {
	const response = await fetch(props.pokemon.url);
	const data = await response.json();
	pokemonDetails = data;
	detailsLoaded.value = true;
	console.log(data);
	console.log(pokemonDetails.types);
}

const pokemonTypes = await pokemonDetails.types;

const pokemonName = capitalizeFirstLetter(props.pokemon.name);

getPokemonDetails();
</script>

<template>
	<li class="card" v-if="detailsLoaded">
		<div class="card__header">
			<h3>{{ pokemonName }}</h3>
			<h3>#{{ pokemonDetails.id }}</h3>
		</div>
		<div class="card__body">
			<div class="card__image__container">
				<img
					class="card__image"
					:src="
						pokemonDetails.sprites.other['official-artwork']
							.front_default
					"
				/>
			</div>
			<div class="card__abilities">
				<ul>
					<li class="card__ability">
						{{ pokemonDetails.abilities[0].ability.name }}
					</li>
					<li class="card__ability">
						{{ pokemonDetails.abilities[1].ability.name }}
					</li>
					<li class="card__ability">
						{{ pokemonDetails.abilities[2].ability.name }}
					</li>
				</ul>
			</div>
		</div>
	</li>
</template>
<style lang="scss">
@import "../assets/styles.scss";
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400&display=swap");

.card {
	height: 17rem;
	background-color: white;
	border-radius: 2rem;
	.card__header {
		display: flex;
		justify-content: space-between;
		background-color: #f73718;
		border-radius: 2rem 2rem 0 0;
		padding: 1rem;
		h3 {
			font-size: 1.5rem;
			font-family: "Poppins", sans-serif;
			color: white;
			margin: 0;
		}
	}
	.card__body {
		display: flex;
	}
	.card__image__container {
		display: flex;
		align-items: center;
		padding: 2rem;
		.card__image {
			width: 10rem;
			object-fit: contain;
		}
	}
}
.card__ability {
	font-family: "Poppins", sans-serif;
}
</style>
