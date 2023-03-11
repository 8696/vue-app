<script setup lang="ts">
import useUserStore from '@/stores/user'
const userStore = useUserStore()

const setUser = () => {
  userStore.setUser({
    name: Math.random().toString(),
    age: Math.random(),
    token: Math.random().toString()
  })
}
const setUserName = () => {
  userStore.setUserName(Math.random().toString())
}

const clearUser = () => {
  userStore.clearUser()
}

</script>
<template>
  <el-button @click="setUser">set user</el-button>
  <el-button @click="clearUser">clear user</el-button>
  <el-button :disabled="!userStore?.user?.name" @click="setUserName">set user.name</el-button>
</template>

<style scoped></style>
