<script lang="ts" setup>
import useGetState from '@/hooks/useGetState'
import { useMounted } from '@/hooks/useLifecycle'

const [state, setState, getState] = useGetState<string>()

const change = () => {
  console.log(getState())
  // setState(Math.random().toString())
  setState(() => {
    // prevState = 1
    return Math.random().toString()
  })
  console.log(getState())
}
useMounted(() => {
  setTimeout(() => {
    // setState(Math.random().toString())
  }, 3000)
})

const [objState, setObjState, getObjState] = useGetState<{ name: string; age?: number }>({
  name: Math.random().toString()
})

const changeObj = () => {
  // objState.value.name = '1'
  console.log(getObjState())
  // setObjState({
  //   name: Math.random().toString(),
  //   age: Math.random()
  // })
  setObjState((prevState) => {
    // prevState.name = 1
    return {
      ...prevState,
      age: Math.random()
    }
  })
  console.log(getObjState())
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
