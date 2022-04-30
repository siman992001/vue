import { defineStore } from 'pinia'

export const userStore = defineStore('userStore', {
  state: () => {
    return { name: 'Default' }
  },
  actions: {
    change (name) {
      this.name = name;
    }
  }
})
