<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    
    <header>
        <nav class="nav-icon">
            <img id="pokebola" src="./assets/images/Poké_Ball_icon.svg.png" alt="" width="50">
            <img id="logo-pokemon" src="./assets/images/International_Pokémon_logo.svg.png" alt="" width="150">
            <router-link to="/login">login</router-link>
        </nav>
    </header>
    
    <main>
        <router-view/>
    </main>
    
    <footer>
       
            <h1>Pokemon Team</h1>
        
    </footer>
    
    
</template>

<style lang="scss">
@import './assets/styles.scss';


body{
    background-image: url("./assets/images/Sunny-Field-Scenery-AI-Generated-4K-Wallpaper-1.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    font-family: 'Poppins', sans-serif;
}
main{
    display: grid;
    align-items: center;
    justify-items: center;
}
nav{
    font-size: 2rem;
    
    a{
        text-decoration: none;
        color: white;
    }
}
.nav-icon{
    padding: 1%;
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
}
#logo-pokemon{
    float: right;
}
footer{
    background-color: rgba(0, 0, 0, 0.3);
    height: 3rem;
}
footer h1{
    text-align: center;
    color: aliceblue;
}
</style>
