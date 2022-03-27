<template>
  <div class="home">
    首页
    <Avatar :round="true" :size="100" url="http://p1.music.126.net/UyyAvtlKQapq3VVVH4uWHQ==/109951167198849707.jpg?imageView&quality=89"></Avatar>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar'
export default {
  name: 'Home',
  components:{
    Avatar
  }
}
</script>
