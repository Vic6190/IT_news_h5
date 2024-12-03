<script setup lang="ts">
import router from '@/router';
import MyActivity from './myActivity.vue';


</script>

<template>
  <main>
    <MyActivity />
    <button @click="router.push({ name: 'myActivity' })">
      去活动页
    </button>
    <button @click="router.push('/myFollow')">
      去关注
    </button>
  </main>
</template>
