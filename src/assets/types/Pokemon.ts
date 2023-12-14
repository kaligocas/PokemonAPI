import type { PokemonAbilityList } from "./PokemonAbilityList";
import type { PokemonSprites } from "./PokemonSprites";
import type { PokemonType } from "./PokemonType";

export type Pokemon = {
	name: string;
	id: number;
	sprites: PokemonSprites;
	types: PokemonType;
	abilityList: PokemonAbilityList[];
};
