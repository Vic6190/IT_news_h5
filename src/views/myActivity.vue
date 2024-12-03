<script lang="ts" setup>
import { ref } from 'vue';

const active = ref(0)
const postList = ref([])
const announcementList = ref([])
const dataList = ref([])
</script>

<template>
  <van-tabs :active="active" :color="'red'" :line-width="'14vw'" shrink>
    <van-tab title="作品">
      <VanList v-if="postList.length > 0">
        <VanCell v-for="(item, index) in 10" :key="index">
          <div>黑马程序员</div>
          <div>2021/05</div>
        </VanCell>>
      </VanList>
      <div v-else>暂无作品</div>
    </van-tab>
    <van-tab title="公告">
      <VanList v-if="announcementList.length > 0">
        <VanCell v-for="(item, index) in 10" :key="index">
          <div>黑马程序员</div>
          <div>2021/05</div>
        </VanCell>>
      </VanList>
      <div v-else>暂无公告</div>
    </van-tab>
    <van-tab title="数据">
      <VanList v-if="dataList.length > 0">
        <VanCell v-for="(item, index) in 10" :key="index">
          <div>黑马程序员</div>
          <div>2021/05</div>
        </VanCell>>
      </VanList>
      <div v-else>暂无数据</div>
    </van-tab>
  </van-tabs>
</template>

<style lang="scss" scoped></style>
