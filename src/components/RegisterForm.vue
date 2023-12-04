<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router';

const store = useAuthStore()

const Username = ref('')
const Password = ref('')

const route = useRoute()
const router = useRouter()

function register (){
    if(Username.value && Password.value){
        store.register.Username = Username;
        store.register.Password = Password; 
        const redirectPath = route.query.redirec || '/Login'
        router.push(redirectPath)
    }
}
</script>
<template>
        <div class="register">
            <h1>Register Now</h1>
            <form @submit.prevent="register">
                <label for="">
                    <p>Username</p>
                    <input type="text" name="username" v-model="Username">
                </label>
                <label for="">
                    <p>Password</p>
                    <input type="password" name="password" v-model="Password">
                </label>
                <button  type="submit">Register</button>
            </form>
        </div>
</template>