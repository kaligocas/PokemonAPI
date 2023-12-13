<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const store = useAuthStore()

const username = ref('')
const password = ref('')

const router = useRouter()

function login (){
    for(let i = 1; i <= store.register.length; i++){
        // i+=1
        
        console.log("entra al bucle", i)
        if(username.value === store.register[i].username && password.value === store.register[i].password){
            console.log("entra al if 1")
            store.register[i].isAuthenticated = true;
            store.user.isAuthenticated = true
            
            router.push('/private')
        }
        else if(username.value === store.register[i].username && password.value != store.register[i].password){
            console.log("entra al if 2")
            alert('Contraseña Incorrecta')
        }
        else{
            console.log("entra al if 3")
            alert('El usuario no existe')
            router.push('/register')
            break
        }
        
    }

}   

</script>
    

<template>
  <div class="login">
        <h1>Sing In</h1>
        <form @submit.prevent="login">
            <label for="">
                <p>Username</p>
                <input type="text" name="username" v-model="username">
            </label>
            <label for="">
                <p>Password</p>
                <input type="password" name="password" v-model="password">
            </label>
            <label for="">
                <p>Don´t have an account yet? <a href="">Sing Up</a></p>
            </label>
            <button  type="submit">Login</button>
        </form>
    </div>
</template>



<style lang="scss" scoped>
@import "./../assets/styles.scss";


.login{
    background-color: rgba(0, 0, 0, 0.364);
    color: white;
    padding: 1rem;
    width: 50rem;
    text-align: center;
    border-radius: 20px;
    margin: 2%;

    h1{
        font-size: 50px;
    }
    p{
        font-size: 15px;
    }
    label{
        text-align: left;
    }

    input{
        width: 80%;
        padding: 4%;
        border-radius: 50px;
        border: none;
        background-color: #f0f8ff4f;
        font-size: 15px;
    }
    a{
        color: white;
        font-weight: 700;
    }
    button{
        width: 49%;
        padding: 4%;
        border-radius: 50px;
        border: none;
        background-color: #f0f8ff4f;
        color: white;
        font-weight: 600;
        font-family: 'Poppins', sans-serif;
        cursor: pointer;
        font-size: 15px;
    }
    button:hover{
        background-color: rgba(255, 255, 255, 0.423);
    }

}

</style>
