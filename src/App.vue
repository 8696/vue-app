<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

</script>
<template>
  <RouterView />
  <div v-if="route.name !== 'home'" style="position: fixed; right: 20px; bottom: 20px">
    <RouterLink to="/">Home</RouterLink>
  </div>
</template>
<style lang="scss" scoped>
a {
  color: var(--el-color-primary);
}
</style>
