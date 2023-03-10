<script lang="ts" setup>
import useGetState from '@/hooks/useGetState'
import { useMounted } from '@/hooks/useLifecycle'

const [state, setState, getState] = useGetState<string>()

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
  <div>state value: {{ state }}</div>
  <el-button @click="change">change</el-button>
  <hr />
  <div>objState value: {{ objState }}</div>
  <el-button @click="changeObj">changeObj</el-button>
</template>
