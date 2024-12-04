<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const active = ref(0)
const postList = ref([])
const announcementList = ref<IAnnouncement[]>([])
const dataList = ref([])



onMounted(() => {
  document.title = '我的动态'
  announcementList.value = [{
    title: '黑马程序员招新啦，诚招各路编程高手',
    createTime: '2021/05/25 16:52:39'
  }, {
    title: '传智教育成为A股中第一支成功IPO的教育产业股',
    createTime: '2021/1/25 16:52:39'
  }, {
    title: 'web前端工程师训练营来袭，小伙伴们踊跃报名',
    createTime: '2021/02/25 08:52:39'
  }]
})

</script>

<template>
  <van-tabs :active="active" :color="'red'" :line-width="'10vw'" shrink>
    <VanDivider />
    <van-tab title="作 品">
      <VanList v-if="postList.length > 0">
        <VanCell v-for="(item, index) in 10" :key="index">
          <div>黑马程序员</div>
          <div>2021/05</div>
        </VanCell>>
      </VanList>
      <!--  <VanCol v-else style="display: flex; justify-content: center;align-items: center ;flex-direction: column;">
        <img src="../components/icons/ic_noData.svg" style="width: 40vw">

        <div style="font-size:12px;">暂无数据</div>
      </VanCol> -->
      <!-- 写半天才发现有写好的😅 -->
      <VanEmpty v-else description="暂无数据"></VanEmpty>

    </van-tab>
    <van-tab title="公 告">
      <VanList v-if="announcementList.length > 0">
        <VanCell v-for="(item, index) in announcementList" :key="index" :title="item.title" :label="item.createTime">

        </VanCell>
      </VanList>
      <VanEmpty v-else description="暂无数据"></VanEmpty>
    </van-tab>
    <van-tab title="数 据">
      <VanRow :justify="'space-around'">
        <!--粉丝数元素块-->
        <VanCol class="DataBlock">
          <VanRow class="TitleRow" :justify="'space-between'">
            粉丝数
            <img src="../components/icons/ic_rightArrow.svg" style="width: 14px;">
          </VanRow>
          <span class="CountNumber">
            0
          </span>
          <span class="CountUnit">
            人
          </span>
        </VanCol>
        <!--阅读数元素块-->
        <VanCol class="DataBlock">
          <VanRow class="TitleRow" :justify="'space-between'">
            阅读数
            <img src="../components/icons/ic_rightArrow.svg" style="width: 14px;">
          </VanRow>

          <span class="CountNumber">
            0
          </span>
          <span class="CountUnit">
            次
          </span>

        </VanCol>
      </VanRow>

    </van-tab>
  </van-tabs>
</template>

<style scoped>
.DataBlock {
  background-color: #f9f9f9;
  width: 48vw;
  padding: 10px;
  border-radius: 10px;
  height: 12vh;

}

.CountNumber {
  font-size: 25px;
}

.CountUnit {
  font-size: 12px;
  color: #999;
}

.TitleRow {
  margin-bottom: 3vw;
}
</style>
