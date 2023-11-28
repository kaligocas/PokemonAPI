<script setup lang="ts"></script>

<template>
  <div class="login">
        <h1>Sing In</h1>
        <form action="">
            <label for="">
                <p>Username</p>
                <input type="text">
            </label>
            <label for="">
                <p>Password</p>
                <input type="password">
            </label>
            <label for="">
                <p>Don´t have an account yet? <a href="">Sing Up</a></p>
            </label>
            <button>Login</button>
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
