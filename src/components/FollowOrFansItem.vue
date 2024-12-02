<script lang="ts" setup>
import { ref } from 'vue';

const prop = defineProps<{ isFollow: boolean, fansCount: number, avatar: string, name: string }>()
const isfollow = ref(prop.isFollow)

</script>

<template>

  <div class="row">
    <img :src="avatar" alt="暂无" class="avatar">
    <span style="position: relative; bottom: 1.5vw;">
      <span style="display: inline-block;font-size: 3vw;">
        {{ name }}
        <p style="font-size: 2.5vw; color:#969799 ;">
          粉丝数：{{ fansCount }}人
        </p>
      </span>
    </span>
    <VanButton class="button" :class="{ button_isFollow: isfollow, button_notFollow: !isfollow }"
      @click="isfollow = !isfollow">{{ isfollow
        ? '取消关注' :
        '关注'
      }}</VanButton>
  </div>
  <VanDivider />
</template>

<style scoped>
.row {
  width: '100%';
  height: 8vw;
  padding-left: 2vw;
}

.avatar {
  width: 8vw;
  border-radius: 4vw;
  margin-right: 2vw;
}

.button {

  height: 6vw;
  width: 18.5vw;
  border-radius: 3vw;
  position: relative;
  bottom: 4vw;
  left: 50vw;
  font-size: 2.5vw
}

.button_isFollow {
  background-color: #EBEDF0;
  color: #969799;
}

.button_notFollow {
  background-color: #FC6627;
  color: white;
}
</style>
