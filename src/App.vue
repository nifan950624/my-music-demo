<template>
  <div id="app">
    <vheader></vheader>
    <router-view></router-view>
  </div>
</template>

<script>
//header组件
import vheader from "@/components/header"
export default {
  name: "App",
  components: {
    vheader
  }
}
</script>

<style>
</style>
