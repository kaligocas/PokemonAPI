import type { PokemonResult } from "../types/PokemonResult";
import type { PokemonResponse } from "../types/PokemonResponse";

export async function getPokemons() {
	try {
		const response = await fetch(
			`https://pokeapi.co/api/v2/pokemon/?limit=200&offset=0`
		);
		const pokemonResponse: PokemonResponse = await response.json();
		let pokemonResults: PokemonResult[] = pokemonResponse.results;
		return pokemonResults;
	} catch (error) {
		alert(error);
		console.log(
			"Algo inesperado ha ocurrido, inténtalo de nuevo más tarde."
		);
	}
}
