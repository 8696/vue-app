import { ref } from 'vue'

type TUser = {
  name: string
  age?: number
  token: string
}

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

export default {
  user,
  setUser,
  setUserName,
  clearUser
}
