import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state() {
    return {isLoggedIn: false, user: null}
  },
   actions: {}
})
