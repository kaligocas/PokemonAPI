import { defineStore } from "pinia";
import { reactive } from "vue";


export const useAuthStore = defineStore('auth', ()=>{

    const user = reactive(
        {
            username: '',
            password: '',
            isAuthenticated: false
        }
    )
    let register:Array<Object> = reactive([
        {
            username: 'notExist',
            password: 'NotExist',
            isAuthenticated: false
        },
        {
            username: 'NicoCra',
            password: '12345',
            isAuthenticated: false
        }
    ])


    return {user, register}
})