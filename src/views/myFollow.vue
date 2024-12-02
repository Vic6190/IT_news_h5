<script lang="ts" setup>
import FollowOrFansItem from '@/components/FollowOrFansItem.vue';
import { ref } from 'vue';

const active = ref(0);
</script>

<template>
  <div>
    <van-tabs :active="active" :color="'red'" :line-width="'14vw'" shrink>
      <VanDivider />
      <van-tab title="我的关注">
        <div v-for="(item, index) in [1, 2, 3, 4]" :key="index">
          <FollowOrFansItem :is-follow="true"
            :avatar="'https://img1.baidu.com/it/u=1090452517,2487311686&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1733245200&t=f8df6e60bd3b70c8bc5eb8fc5fdad9e6'"
            :fans-count="1" :name="'大灰狼'" />
        </div>
      </van-tab>
      <van-tab title="我的粉丝">
        <!--这里需要将云端实时的关注/粉丝列表渲染到上面-->
        <div v-for="(item, index) in [1, 2, 3, 4]" :key="index">
          <FollowOrFansItem :is-follow="true"
            :avatar="'https://img0.baidu.com/it/u=2299157397,582095979&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800'"
            :fans-count="1" :name="'小红帽'" />
        </div>
      </van-tab>

    </van-tabs>
  </div>
</template>

<style scoped></style>
