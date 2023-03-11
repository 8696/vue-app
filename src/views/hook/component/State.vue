<script lang="ts" setup>
import useGetState from '@/hooks/useGetState'
import { useMounted } from '@/hooks/useLifecycle'

const [state, setState] = useGetState<string>()

const change = () => {
  setState(Math.random().toString())
}

const [objState, setObjState] = useGetState<{ name: string; age?: number }>()

const changeObj = () => {
  setObjState({
    name: Math.random().toString(),
    age: Math.random()
  })
}

useMounted(() => {
  setInterval(() => {
    // console.log(getState())
  }, 2000)
})
</script>
<template>
  <div class="m-content">
    <div>state value: {{ state }}</div>
  </div>
  <el-button @click="change">change</el-button>
  <hr />
  <div class="m-content">
    <div>objState value: {{ objState }}</div>
  </div>
  <el-button @click="changeObj">changeObj</el-button>
</template>
