<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <router-link to="/login">login</router-link>
    <router-view/>
</template>

<style lang="scss">
@import "./assets/styles.scss";
</style>
