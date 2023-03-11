<script lang="ts" setup>
import { useMounted, useBeforeMount } from '@/hooks/useLifecycle'

import { ref } from 'vue'

const state = ref('')

useMounted(() => {
  console.log('useMounted')
  state.value = Math.random().toString()
})

useBeforeMount(() => {
  console.log('useBeforeMount')
  state.value = Math.random().toString()
})
</script>
<template>
  <div>state value：{{ state }}</div>
</template>
