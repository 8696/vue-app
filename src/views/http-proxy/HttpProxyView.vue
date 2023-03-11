<script lang="ts" setup>
import axios from 'axios'

import useGetState from '@/hooks/useGetState'

const [state, setState] = useGetState('/get')

const [json, setJson] = useGetState<string>()

const change = (value: string) => {
  setState(value)
}

const request = () => {
  axios
    .get(`/api/${state.value}`)
    .then((data) => {
      setJson(JSON.stringify(data.data, null, '  '))
    })
    .finally(() => {
      console.log('finally')
    })
}
</script>
<template>
  <div class="m-view">
    <h3>Http proxy</h3>
    <el-input v-model="state" @input="change" />
    <hr />
    <el-button @click="request" type="primary">request</el-button>

    <hr />
    <pre>{{ json }}</pre>
  </div>
</template>

<style lang="scss" scoped></style>
