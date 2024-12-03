import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const token = ref('')
  const getToken = () => {
    return token
  }
  const setToken = (t: string) => {
    token.value = t
  }
  return { getToken, setToken }
})
