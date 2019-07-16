<template>
  <div class="search-song">
    <form action>
      <label>
        <div class="search-container">
          <div class="search-left iconfont icon-sousuo"></div>
          <input class="search-right" placeholder="搜索歌曲、歌手、专辑" id="search" type="text" />
        </div>
      </label>
    </form>
    <div class="recommend-search border-top">
      <div class="title">热门搜索</div>
      <ul class="search-list">
        <li class="search-item" v-show="index < 9"  v-for="(song,index) of hotkey" :key="song.n">{{song.k}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {getSearchList} from 'common/js/getSearchList'
export default {
  data() {
    return {
      hotkey: []
    }
  },
  methods: {
    _getSearchList() {
      getSearchList().then((res)=> {
        this.hotkey = res.data.data.hotkey
      })
    }
  },
  created() {
    this._getSearchList()
  }
}
</script>

<style scoped>
.search-song {
  position: absolute;
  top: 105px;
  left: 0;
  width: 100%;
}

.search-container {
  display: flex;
  height: 30px;
  margin: 15px 10px;
  border-radius: 30px;
  background: #ebecec;
  overflow: hidden;
}

.search-left {
  flex: 0 0 20px;
}

.search-right {
  flex: 1;
  background: transparent;
  color: #333;
}

.recommend-search {
  padding: 15px 10px 0;
}

.recommend-search .title {
  margin-bottom: 8px;
  font-size:12p
  x;
  color:#333;
}

.search-item {
  display: inline-block;
  margin-right: 8px;
  margin-bottom: 8px;
  padding: 0 14px;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  color: #333;
  border: 1px solid #ededed;
  border-radius: 30px;
}
</style>

