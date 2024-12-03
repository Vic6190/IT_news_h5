<script lang="ts" setup>

import { myAxios } from '@/api/myAxios';
import FollowOrFansItem from '@/components/myFollowComps/FollowOrFansItem.vue';
import { useAuthStore } from '@/stores/auth';
import { onMounted, ref } from 'vue';
// 激活页签索引
const active = ref(0);
// 关注列表
const followList = ref<FollowUser[]>([])
// 粉丝列表
const fansList = ref<FollowUser[]>([])
// 关注页码
const followPageIndex = ref(1)
// 粉丝页码
const fansPageIndex = ref(1)
// 关注总共
let followTotal: number
// 粉丝总共
let fansTotal: number

// 是否正在加载
const loading = ref(false)
//

const getToken = async () => {
  /* const res = await axios.post('/v1_0/authorizations', { mobile: '18199999999', code: '917673' })
  console.log(res);
  return res */
  useAuthStore().setToken('52aa3490-ca7b-4154-9f6c-0299b120ef0c')
}

const getFollowList = async (page: number = 1) => {
  const res = await myAxios.get<FollowListData>('/v1_0/user/followings', { page, per_page: page * 10 })
  followTotal = Number(res.total_count)
  followList.value = res.results
}
const getFansLsit = async (page: number = 1) => {
  const res = await myAxios.get<FollowListData>('/v1_0/user/followers', { page, per_page: page * 10 })
  fansTotal = Number(res.total_count)
  fansList.value = res.results
}

const onReachEnd = () => {
  getFollowList()
  getFansLsit()
}

onMounted(async () => {
  getToken()
  await getFansLsit(followPageIndex.value)
  await getFollowList(fansPageIndex.value)
})


</script>

<template>
  <div>
    <van-tabs :active="active" :color="'red'" :line-width="'14vw'" shrink>
      <VanDivider />

      <van-tab title="我的关注">
        <!--关注列表-->
        <van-list :loading="loading" @load="onReachEnd">
          <div v-for="(item, index) in followList" :key="index">
            <FollowOrFansItem :item='item' :is-follow="true" />
          </div>
        </van-list>


      </van-tab>

      <van-tab title="我的粉丝">
        <!--粉丝列表-->
        <div v-for="(item, index) in fansList" :key="index">
          <FollowOrFansItem :item='item' :is-follow="false" />
        </div>


      </van-tab>

    </van-tabs>
  </div>

</template>

<style scoped></style>
