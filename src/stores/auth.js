import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        auth: false,
        user: null
    })
})