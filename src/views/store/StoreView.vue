<script setup lang="ts">

import User from './component/User.vue'
import useUserStore from '@/stores/user'


import RefStore from './component/ref-store/RefStore.vue'
import refStore from './component/ref-store/ref-store'

const userStore = useUserStore()

</script>
<template>
  <div class="m-view">
    <h3>User store</h3>
    <div class="m-content">
      <div class="">
        user value: {{userStore.user || 'null'}}
      </div>
      <div>
        user.name value: {{userStore.user?.name || 'null'}}
      </div>
    </div>
    <User />

    <h3>Ref store</h3>
    <div class="m-content">
      <div class="">
        user value: {{refStore.user || 'null'}}
      </div>
      <div>
        user.name value: {{refStore.user.value?.name || 'null'}}
      </div>
    </div>
    <RefStore />
  </div>
</template>

<style scoped></style>
