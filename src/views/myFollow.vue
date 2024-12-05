<script lang="ts" setup>

import { myAxios } from '@/api/myAxios';
import FollowOrFansItem from '@/components/myFollowComps/FollowOrFansItem.vue';
import { useAuthStore } from '@/stores/auth';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
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

// 是否正在加载
const loading = ref(false)
const router = useRoute()


const getToken = async () => {
  /* const res = await axios.post('/v1_0/authorizations', { mobile: '18199999999', code: '917673' })
  console.log(res);
  return res */
  useAuthStore().setToken(jk.getToken())
}
// 获取关注列表
const getFollowList = async (page: number = 1) => {
  const res = await myAxios.get<FollowListData>('/v1_0/user/followings', { page, per_page: 100 })
  followList.value = res.results
}
// 获取粉丝列表
const getFansLsit = async (page: number = 1) => {
  const res = await myAxios.get<FollowListData>('/v1_0/user/followers', { page, per_page: page * 10 })
  fansList.value = res.results
}



onMounted(async () => {
  // 根据路由参数决定显示哪个tab
  active.value = Number(router.params.type as string)
  // 获取token
  getToken()
  // 获取关注列表
  await getFansLsit(followPageIndex.value)
  // 获取粉丝列表
  await getFollowList(fansPageIndex.value)
})


</script>

<template>
  <div style="height: 100vh;width: 100vw;">
    <van-tabs :active="active" :color="'red'" :line-width="'14vw'" shrink>
      <VanDivider />

      <van-tab title="我的关注">
        <!--关注列表-->
        <!--列表不为空时-->
        <div v-for="(item, index) in followList" :key="index">
          <FollowOrFansItem :item='item' :is-follow="true" />
        </div>
        <VanCell v-if="followList.length > 0">
          <span class="NoMore">
            没有更多了
          </span>
        </VanCell>
        <!--列表为空时-->
        <VanCol v-if="followList.length === 0"
          style="justify-content: center;height: 80vh;display: flex; align-items:  center;">
          <div>
            <div>
              <img src="../components/icons/ic_noData.svg" style="width: 50vw;">
            </div>
            <span style="width: 100%;display: inline-block;text-align: center;">暂无粉丝</span>
          </div>
        </VanCol>
      </van-tab>

      <van-tab title="我的粉丝">
        <!--粉丝列表-->
        <!--列表不为空时-->
        <div v-for="(item, index) in fansList" :key="index">
          <FollowOrFansItem :item='item' :is-follow="false" />
        </div>
        <VanCell v-if="fansList.length > 0">
          <span class="NoMore">
            没有更多了
          </span>
        </VanCell>
        <!--列表为空时-->
        <VanCol v-if="fansList.length === 0"
          style="justify-content: center;height: 80vh;display: flex; align-items:  center;">
          <div>
            <div>
              <img src="../components/icons/ic_noData.svg" style="width: 50vw;">
            </div>
            <span style="width: 100%;display: inline-block;text-align: center;">暂无粉丝</span>
          </div>
        </VanCol>
      </van-tab>

    </van-tabs>
  </div>

</template>

<style scoped>
.NoMore {
  position: relative;
  right: 40vw;
}

.NoData {}
</style>
