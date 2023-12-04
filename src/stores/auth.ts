import { defineStore } from "pinia";
import { reactive } from "vue";


export const useAuthStore = defineStore('auth', ()=>{

    const user = reactive(
        {
            username: 'NicoCra',
            password: '12345',
            isAuthenticated: false
        }
    )
    let register = reactive(
        {
            Username:toString,
            Password:toString,
        }
    )

    return {user, register}
})