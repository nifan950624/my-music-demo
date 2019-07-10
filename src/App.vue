<template>
  <div id="app">
    <vheader></vheader>
    <keep-alive exclude="player">
      <router-view></router-view>
    </keep-alive>
    <vplayer></vplayer>
  </div>
</template>

<script>
//header组件
import vheader from '@/components/header'
import vplayer from '@/components/pages/player/player'
export default {
  name: "App",
  components: {
    vheader,
    vplayer
  }
};
</script>

<style>
</style>
