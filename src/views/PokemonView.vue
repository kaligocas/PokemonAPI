<script setup lang="ts">
import PrivateView from './PrivateView.vue';
import LoginFormView from './LoginFormView.vue';
import PokemonList from "@/components/PokemonList.vue";
</script>

<template>
    <Suspense>
			<PokemonList />
	</Suspense>

</template>


<style lang="scss">
@import "../assets/styles.scss";

</style>
