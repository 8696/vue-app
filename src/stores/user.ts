import { ref } from 'vue'
import { defineStore } from 'pinia'

type TUser = {
  name: string
  age?: number
  token: string
}

const useUserStore = defineStore('user', () => {
  const user = ref<TUser | null>()

  const setUser = (data: TUser | null): boolean => {
    user.value = data
    return true
  }   

  const setUserName = (name: TUser['name']): boolean => {
    if (user.value?.name) {
      user.value = {
        ...user.value,
        name
      }
      return true
    }
    return false
  }

  const clearUser = () => {
    setUser(null)
  }

  return { user, setUser, setUserName, clearUser }
})

export default useUserStore
