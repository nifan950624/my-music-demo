<template>
  <div id="app">
    <vheader></vheader>
    <keep-alive exclude="player">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
//header组件
import vheader from "@/components/header";
export default {
  name: "App",
  components: {
    vheader
  }
};
</script>

<style>
</style>
