<template>
  <div class="user-info-container">
      <div class="avatar">
          <Avatar :size="30" :round="true" url="https://p2.music.126.net/41W07_R6hClRnpwoFSnGSQ==/109951166038468299.jpg?param=30y30"></Avatar>
      </div>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar';
export default {
    components:{
        Avatar,
    }
}
</script>

<style>

</style>