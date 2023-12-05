<script setup lang="ts"></script>

<template>
  <div class="return">
        <h1>Register</h1>
        <form action="">
            <label for="">
                <p>Username</p>
                <input type="text">
            </label>
            <label for="">
                <p>Password</p>
                <input type="text">
            </label>
            <button>Let`s Go</button>
        </form>
    </div>
</template>



<style lang="scss" scoped>
@import "./../assets/styles.scss";

.return{
    background-color: rgba(0, 0, 0, 0.364);
    color: white;
    padding: .1% 5em;
    margin: 2%;
    width: 22%;
    height: 30em;
    text-align: center;
    border-radius: 20px;

    h1{
        height: 1em;
        font-size: 50px;
    }

    label{
        text-align: left;
    }

    input{
        width: 100%;
        padding: 4%;
        border-radius: 50px;
        border: none;
        background-color: #f0f8ff4f;
    }
    a{
        color: white;
        font-weight: 700;
    }
    button{
        width: 49%;
        padding: 4%;
        margin-top: 4em;
        border-radius: 50px;
        border: none;
        background-color: #f0f8ff4f;
        color: white;
        font-weight: 600;
        font-family: 'Poppins', sans-serif;
        cursor: pointer;
        
    }
    button:hover{
        background-color: rgba(255, 255, 255, 0.423);
    }

}

</style>