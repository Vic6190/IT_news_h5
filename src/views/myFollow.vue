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


const getToken = async () => {
  /* const res = await axios.post('/v1_0/authorizations', { mobile: '18199999999', code: '917673' })
  console.log(res);
  return res */
  useAuthStore().setToken('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3d3dy5pdGNhc3QuY24vIiwic3ViIjoiZDdjNjJjZWQtNDYxMi00NDlhLWE2NjEtZDA4ZmE1MmEwNDAwIiwianRpIjoiMDljZjcyYzItOGZmZS00ZjM3LThiNjQtNTU4MWI5ZmQ2ZTM3IiwiaWF0IjoxNzI5OTQzMjk3LCJleHAiOjE3Mjk5NDY4OTd9.tYlKvWO7T5BmU5OO7J9Z7030xVbeIVuDh5nYcK7WZEU')
}
// 获取关注列表
const getFollowList = async (page: number = 1) => {
  const res = await myAxios.get<FollowListData>('/v1_0/user/followings', { page, per_page: 100 })
  followTotal = Number(res.total_count)
  followList.value = res.results
}
// 获取粉丝列表
const getFansLsit = async (page: number = 1) => {
  const res = await myAxios.get<FollowListData>('/v1_0/user/followers', { page, per_page: page * 10 })
  fansTotal = Number(res.total_count)
  fansList.value = res.results
}



onMounted(async () => {
  getToken()
  await getFansLsit(followPageIndex.value)
  await getFollowList(fansPageIndex.value)
})


</script>

<template>
  <div style="height: 100vh;width: 100vw;">
    <van-tabs :active="active" :color="'red'" :line-width="'14vw'" shrink>
      <VanDivider />

      <van-tab title="我的关注">
        <!--关注列表-->
        <div v-for="(item, index) in followList" :key="index">
          <FollowOrFansItem :item='item' :is-follow="true" />
        </div>
      </van-tab>

      <van-tab title="我的粉丝">
        <!--粉丝列表-->
        <div v-for="(item, index) in fansList" :key="index">
          <FollowOrFansItem :item='item' :is-follow="false" />
        </div>

      </van-tab>
      <VanCell>
        <span style="position: relative;right: 40vw;">
          没有更多了
        </span>
      </VanCell>
    </van-tabs>
  </div>

</template>

<style scoped></style>
