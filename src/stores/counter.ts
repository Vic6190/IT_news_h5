import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios, { Axios } from 'axios'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
export const useFollowOrFans = defineStore('FollowOrFans', () => {
  const followList: FollowUser[] = []
  const fansList: FollowUser[] = []
  async function getFollowList() {
    const res = await axios.get<>('')
  }
  function getfansList() {}
})
