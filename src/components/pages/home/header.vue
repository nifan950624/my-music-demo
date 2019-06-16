<template>
  <div class="header">
    <div class="topHeader">
      <div class="menu">菜单</div>
      <ul class="nav">
        <li class="my">我的</li>
        <li class="musics">音乐馆</li>
        <li class="find">发现</li>
      </ul>
      <div class="lisenMusic">识曲</div>
    </div>
    <div class="seach">
      <div class="inputSeach">搜索</div> 
    </div>
  </div>  
</template>

<script>
export default {
  name: 'homeHeader'
}
</script>

<style lang="stylus" scoped>
@import '~style/gloable.styl';
.header
  box-sizing border-box
  line-height .8rem
  background $bgColor
  color rgb(175 242 208)
  .topHeader
    display flex
    align-items center
    justify-content space-between
    padding 0 .1rem
    .nav
      display inline-flex
    .musics
      padding 0 .2rem   
  .seach
    padding 0 .1rem .1rem .1rem
    text-align center
    .inputSeach
      border-radius .4rem
      line-height .4rem
      background rgb(42 170 108)
</style>


