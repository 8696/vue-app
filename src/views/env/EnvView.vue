<script lang="ts" setup>
import { __VUE } from '@/window'

const json = JSON.stringify(import.meta.env, null, '  ')

console.log(import.meta.env.VITE_APP_GENERATE_SOURCEMAP)
console.log(import.meta.env.VITE_APP_URL_API)
console.log(__VUE)
</script>
<template>
  <div class="m-view">
    <h3>import meta env</h3>
    <pre>{{ json }}</pre>
  </div>
</template>

<style lang="scss" scoped></style>
