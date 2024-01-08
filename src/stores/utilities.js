import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNavOpen = defineStore('navOpen', () => {
  let isOpen = ref(false)
  
  function toggleNav() {
    isOpen.value = !isOpen.value
  }

  return { isOpen, toggleNav }
})
