<script lang="ts" setup>
import Fc from './component/fc/Fc'
import Render from './component/render/Render'
import { reactive } from 'vue'

const user = reactive<{ name: string; age?: number }>({
  name: 'init',
  age: 0
})
</script>

<template>
  <div class="m-view">
    <h3>Fc</h3>
    <Fc
      :name="user.name"
      :age="user.age"
      :onChange="(name: string) => {
          user.name = name
        }"
      :onAgeChange="(age: number) => {
          user.age = age
        }"
    />
    <h3>Render</h3>
    <Render />
  </div>
</template>
