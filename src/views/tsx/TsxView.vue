
<script lang="ts" setup>
import Props from './component/props/index'
import { reactive } from 'vue'

const user = reactive<{ name: string, age?: number }>({
  name: 'init',
  age: 0
})

</script>

<template>
  <div class="m-view">
    <h3>Props</h3>
    <Props
        :name="user.name"
        :age="user.age"
        :onChange="(name: string) => {
          user.name = name
        }"
        :onAgeChange="(age: number) => {
          user.age = age
        }"
    />
  </div>
</template>
