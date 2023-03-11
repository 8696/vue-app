<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { routes } from '@/router'
const routeList = routes.filter((item) => item.path && item.name)
</script>
<template>
  <div class="main-link">
    <RouterLink v-for="item in routeList" :key="item.path" :to="item.path">
      {{ item.name }}
    </RouterLink>
  </div>
</template>
<style lang="scss" scoped>
.main-link {
  padding: 20px;
  display: flex;
  flex-direction: column;
}
</style>
