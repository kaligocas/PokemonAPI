<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <RouterView />

    <div>
    <router-link to="/">Home</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/private">Private</router-link>

    </div>
</template>

<style lang="scss">
@import "./assets/styles.scss";

div{
    font-size: 2.5rem;
    display: flex;
    gap: 1rem;
}
</style>
