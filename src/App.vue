<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
</script>
<template>
  <Suspense>
    <template v-slot:default>
      <RouterView />
    </template>
    <template v-slot:fallback>
      <div></div>
    </template>
  </Suspense>

  <div v-if="route.name !== 'home'" style="position: fixed; right: 20px; bottom: 20px">
    <RouterLink to="/">Home</RouterLink>
  </div>
</template>
<style lang="scss" scoped></style>
