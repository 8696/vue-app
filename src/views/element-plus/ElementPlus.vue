<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Button = defineAsyncComponent(() => import('./component/Button.vue'))
const Drawer = defineAsyncComponent(() => import('./component/Drawer.vue'))
const MessageBox = defineAsyncComponent(() => import('./component/MessageBox.vue'))
</script>
<template>
  <div class="m-view">
    <h3>Button</h3>
    <Button />
    <h3>Drawer</h3>
    <Drawer />
    <h3>MessageBox</h3>
    <MessageBox />
  </div>
</template>

<style scoped></style>
