<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
const route = useRoute()
</script>
<template>
  <el-config-provider :locale="zhCn">
    <Suspense>
      <template v-slot:default>
        <RouterView />
      </template>
      <template v-slot:fallback>
        <div></div>
      </template>
    </Suspense>
  </el-config-provider>
  <div v-if="route.name !== 'home'" style="position: fixed; right: 20px; bottom: 20px">
    <RouterLink to="/">Home</RouterLink>
  </div>
</template>
<style lang="scss" scoped></style>
