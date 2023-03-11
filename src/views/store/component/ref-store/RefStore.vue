<script setup lang="ts">
import refStore from './ref-store'

const setUser = () => {
  refStore.setUser({
    name: Math.random().toString(),
    age: Math.random(),
    token: Math.random().toString()
  })
}
const setUserName = () => {
  refStore.setUserName(Math.random().toString())
}

const clearUser = () => {
  refStore.clearUser()
}
</script>
<template>
  <el-button @click="setUser">set user</el-button>
  <el-button @click="clearUser">clear user</el-button>
  <el-button :disabled="!refStore?.user?.value?.name" @click="setUserName">set user.name</el-button>
</template>

<style scoped></style>
