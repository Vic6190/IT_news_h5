<script lang="ts" setup>
import { ref } from 'vue';

const prop = defineProps<{ item: FollowUser, isFollow: boolean }>()
const isfollow = ref(prop.isFollow)


</script>

<template>
  <div class="row">
    <img :src="item.photo" class="avatar">
    <span style="position: relative; bottom: 1.5vw;">
      <span style="display: inline-block;font-size: 3vw;">
        {{ item.name }}
        <p style="font-size: 2.5vw; color:#969799 ;">
          粉丝数：{{ item.fans_count }}人
        </p>
      </span>
    </span>
    <VanButton class="button" :class="{ button_isFollow: isfollow, button_notFollow: !isfollow }"
      @click="isfollow = !isfollow">{{ isfollow
        ? item.mutual_follow ? '互相关注' : '取消关注' :
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
  position: relative;
}



.avatar {
  width: 8vw;
  aspect-ratio: 1;
  border-radius: 4vw;
  margin-right: 2vw;
}

.button {

  height: 6vw;
  width: 18.5vw;
  border-radius: 3vw;
  position: absolute;
  bottom: 3vw;
  right: 8vw;
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
