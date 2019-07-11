<template>
  <div class="songList">
    歌单列表
  </div>
</template>

<script>
export default {
  props: {
    selectSongList : {
      type : Array,
      default() {
        return []
      }
    } 
  }
}
</script>

<style>

</style>
