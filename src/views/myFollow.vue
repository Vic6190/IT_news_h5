<script lang="ts" setup>
import FollowOrFansItem from '@/components/FollowOrFansItem.vue';


</script>

<template>
  <div v-for="(item, index) in [1, 2, 3, 4]" :key="index">
    <FollowOrFansItem :is-follow="true"
      :avatar="'https://img1.baidu.com/it/u=1090452517,2487311686&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1733245200&t=f8df6e60bd3b70c8bc5eb8fc5fdad9e6'"
      :onclick-button="() => { }" :fans-count="1" :name="'大灰狼'" />
  </div>

</template>

<style lang="scss" scoped></style>
