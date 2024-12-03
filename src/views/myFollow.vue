<script lang="ts" setup>

import { onMounted, ref } from 'vue';
import FollowOrFansItem from '@/components/myFollowComps/FollowOrFansItem.vue'
import { useAuthStore } from '@/stores/auth';
import { myAxios } from '@/api/myAxios';
// 激活页签索引
const active = ref(0);
// 关注列表
const followList = ref<FollowUser[]>([{
  id: '10086',
  name: '张三',
  photo: 'https://img1.baidu.com/it/u=1090452517,2487311686&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1733245200&t=f8df6e60bd3b70c8bc5eb8fc5fdad9e6',
  fans_count: '666',
  mutual_follow: 'true'
}])
// 粉丝列表
const fansList = ref<FollowUser[]>([{
  id: '10086',
  name: '李四',
  photo: 'https://img1.baidu.com/it/u=1090452517,2487311686&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1733245200&t=f8df6e60bd3b70c8bc5eb8fc5fdad9e6',
  fans_count: '666',
  mutual_follow: 'true'
}])

const getToken = async () => {
  const res = await myAxios.get('/v1_0/authorizations?mobile=18199999999&code=701016')
  console.log(res);

  return res
}
onMounted(async () => {
  useAuthStore().setToken('')
  const res = await myAxios.get<FollowUser[]>('/v1_0/user/followings', { page: 0, per_page: 10 })
  console.log(res);
})


</script>

<template>
  <div>
    <van-tabs :active="active" :color="'red'" :line-width="'14vw'" shrink>
      <VanDivider />

      <van-tab title="我的关注">
        <!--关注列表-->
        <div v-for="(item, index) in followList" :key="index">
          <FollowOrFansItem :item='item' />

        </div>

      </van-tab>

      <van-tab title="我的粉丝">
        <!--粉丝列表-->

        <div v-for="(item, index) in fansList" :key="index">
          <FollowOrFansItem :item='item' />
        </div>


      </van-tab>

    </van-tabs>
  </div>
  <button @click="getToken">
    点击获取token {{ getToken() }}
  </button>
</template>

<style scoped></style>
