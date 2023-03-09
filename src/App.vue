<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="nav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/element">Element</RouterLink>
  </div>

  <RouterView />
</template>
<style lang="scss" scoped>
.nav{
  a{
    margin-right: 8px;
  }
}
</style>
