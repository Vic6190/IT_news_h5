<script lang="ts" setup>
defineProps<{ onclickButton: () => void, isFollow: boolean, fansCount: number, avatar: string, name: string }>()

</script>

<template>
  <div class="row">
    <img :src="avatar" alt="暂无" class="avatar">
    <span style="position: relative; bottom: 1.5vw;">
      <span style="display: inline-block;font-size: 3vw;">
        {{ name }}
        <p style="font-size: 2.5vw; color:#F6F7F9 ;">
          粉丝数：{{ fansCount }}人
        </p>
      </span>
    </span>
    <VanButton class="button">{{ isFollow ? '取消关注' : '关注' }}</VanButton>
  </div>
</template>

<style scoped>
.row {
  width: '100%';
  height: 12vw;
  background-color: rgb(146, 159, 151);
  border: 0.5px solid gray;
  padding-top: 2vw;

}

.avatar {
  width: 8vw;
  border-radius: 4vw;
  margin-right: 2vw;
}

.button {
  background-color: #F5F6F8;
  color: rgb(146, 159, 151);
  height: 6vw;
  width: 18.5vw;
  border-radius: 3vw;
  position: relative;
  bottom: 4vw;
  left: 50vw;
  font-size: 2.5vw
}
</style>
