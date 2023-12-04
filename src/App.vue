<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { useAuthStore } from '@/stores/auth';

const store = useAuthStore()

function logOut() {
    if(store.user.isAuthenticated==true){
        store.user.isAuthenticated = false
    }
}

</script>

<template>
    
    <header>
        <nav class="nav-icon">
            <img id="pokebola" src="./assets/images/Poké_Ball_icon.svg.png" alt="" width="50">
            <img id="logo-pokemon" src="./assets/images/International_Pokémon_logo.svg.png" alt="" width="150">
            
            <router-link to="/">Home</router-link>
            <router-link to="/login">Login</router-link>
            <router-link to="/private">Private</router-link>
        </nav>
        <p id="logOut" v-on:click="logOut" v-if="store.user.isAuthenticated == true">LogOut</p>
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
p{
    font-size: 1.8rem;
}
#logOut{
    cursor: pointer;
}
</style>
