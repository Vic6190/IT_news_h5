<script lang="ts" setup>
import { onMounted } from 'vue';
const postList = ref([])
onMounted(() => {
  document.title = '我的作品'
})
</script>

<template>
  <VanEmpty v-if="postList.length === 0" :description="'暂无数据'" />
  <VanList v-else>
    <VanCell v-for="(item, index) in postList" :key="index">
      {{ item }}
    </VanCell>
  </VanList>
</template>

<style scoped></style>
