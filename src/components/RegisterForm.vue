<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const store = useAuthStore()

const Username = ref('')
const Password = ref('')

const router = useRouter()

function register () :void{
    if(Username.value && Password.value){
        let newUser = {
            username: "",
            password: "",
            isAuthenticated: false
        }

        newUser.username = Username.value;
        newUser.password = Password.value; 

        store.register.push(newUser)

        router.push('/login')
    }
}
</script>
<template>
        <div class="register return">
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
<style lang="scss" scoped>
@import "./../assets/styles.scss";

.register{
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
        margin-top: 2rem;
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