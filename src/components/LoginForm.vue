<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router';

const store = useAuthStore()

const username = ref('')
const password = ref('')

const route = useRoute()
const router = useRouter()


function login (){
    if(username.value === store.user.username && password.value === store.user.password){
        store.user.isAuthenticated = true;
        const redirectPath = route.query.redirec || '/private'
        router.push(redirectPath)
    }
}

</script>
    

<template>
    
<main>
    <H1>LOGIN</H1>
    <form @submit.prevent="login">
        <label for="">Nombre</label>
        <input type="text" name="username" v-model="username">


        <br>
        <br>

        <label for="">Contraseña</label>
        <input type="password" name="password" v-model="password">

        <button type="submit">LogIn</button>
    </form>
</main>
</template>

<style lang="scss" scope>
.form{
    font-size: 1.8rem;
}
</style>
