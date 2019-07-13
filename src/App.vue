<template>
  <div id="app">
    <vheader></vheader>
    <keep-alive exclude="player">
      <router-view @playSong="handlePlay"></router-view>
    </keep-alive>
    <vplayer ref="player"></vplayer>
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
  },
  methods: {
    handlePlay() {
      this.$refs.player.play()
    }
  },
};
</script>

<style>
</style>
