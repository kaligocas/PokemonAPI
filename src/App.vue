<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <header>
        <nav class="nav-icon">
            <img id="pokebola" src="./assets/images/Poké_Ball_icon.svg.png" alt="" width="50">
            <img id="logo-pokemon" src="./assets/images/International_Pokémon_logo.svg.png" alt="" width="150">
        </nav>
    </header>
    <router-link to="/login"></router-link>
    <router-view/>
    
    <footer>
       
            <h1>Pokemon Team</h1>
        
    </footer>
    
    
</template>

<style lang="scss">
@import "./assets/styles.scss";
body{
    background-image: url("./assets/images/Sunny-Field-Scenery-AI-Generated-4K-Wallpaper-1.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    font-family: 'Poppins', sans-serif;
}
.nav-icon{
    padding: 1%;
    background-color: rgba(0, 0, 0, 0.3);
}
#logo-pokemon{
    float: right;
}
footer{
    background-color: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 10%;
    bottom: 0;
}
footer h1{
    text-align: center;
    color: aliceblue;
}
</style>
