<script lang="ts" setup>
import less from './index.module.less'
import scss from './index.module.scss'
</script>

<template>
  <div class="m-view">
    <h3>Less</h3>
    <div :class="less.title">less</div>
    <h3>Scss</h3>
    <div :class="scss.title">scss</div>
  </div>
</template>

<style scoped></style>
