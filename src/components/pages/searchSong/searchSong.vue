<template>
  <scroll class="search-song"
          :data="searchList"
          :pullup="true"
          @scrollToEnd="loadData">
    <div class="content">
      <form @submit.stop.prevent="handleQuery">
        <label>
          <div class="search-container">
            <div class="search-left iconfont icon-sousuo"></div>
            <input
              class="search-right"
              v-model="query"
              placeholder="搜索歌曲、歌手、专辑"
              id="search"
              type="text"
            />
            <span
              v-show="query && query.length"
              @click.stop.prevent="handleDel"
              class="del iconfont icon-del2"
            ></span>
          </div>
        </label>
      </form>
      <div class="recommend-search border-top" v-show="!searchList.length">
        <div class="title">热门搜索</div>
        <ul class="search-list">
          <li
            class="search-item"
            v-show="index < 9"
            v-for="(song,index) of hotkey"
            :key="song.n"
            @click="handleHotClick(song.k)"
          >{{song.k}}
          </li>
        </ul>
      </div>
      <div class="searchSong" v-show="searchList && searchList.length">
        <ol id="songs" class="list">
          <li
            @click="handleSongClick(song)"
            class="new-song"
            v-for="song of searchList"
            :key="song.id"
          >
            <div class="song-name">{{song.songname}}</div>
            <div class="song-text">
              <span class="iconfont icon-sq"></span>
              <span class="song-author">{{song.singer[0].name}}{{song.subtitle}}</span>
            </div>
            <span class="iconfont icon-bofanganniu play-icon-wrapper"></span>
          </li>
        </ol>
      </div>
    </div>
  </scroll>
</template>

<script>
  import Scroll from '../../Scroll/scroll'
  import {getSearchList, getSearchSong} from "common/js/getSearchList";

  export default {
    components: {
      Scroll
    },
    watch: {
      query() {
        if (!this.query) {
          this.searchList = [];
        }
      }
    },
    data() {
      return {
        hotkey: [],
        query: "",
        searchList: [],
        pages: 1
      };
    },
    mounted() {
      this._getSearchList();
    },
    methods: {
      handleDel() {
        this.query = "";
      },
      loadData() {
        this.pages++
        getSearchSong(this.query, this.pages).then((res) => {
          this.searchList = [...this.searchList, ...res.data.data.song.list]
        })
      },
      handleHotClick(name) {
        this.query = name;
        this.handleQuery()
      },
      handleSongClick(song) {
        this.$store.commit("isShow", true);
        this.$store.commit("addSong", song);
      },
      handleQuery() {
        this._getSearchSong();
      },
      _getSearchList() {
        getSearchList().then(res => {
          this.hotkey = res.data.data.hotkey;
        });
      },
      _getSearchSong() {
        getSearchSong(this.query, this.pages).then(res => {
          this.searchList = res.data.data.song.list;
        })
      }
    },
  };
</script>

<style scoped>
  .del {
    position: absolute;
    right: 3px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
    padding: 5px;
  }

  .search-song {
    position: absolute;
    top: 105px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }

  .search-container {
    position: relative;
    display: flex;
    height: 30px;
    margin: 0 10px 15px 10px;
    border-radius: 30px;
    background: #ebecec;
    overflow: hidden;
  }

  .content {
    padding-top: 15px;
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
    font-size: 12 p x;
    color: #333;
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

  .searchSong {
    background: #fff;
  }

  .song-name {
    margin-top: 5px;
    font-size: 17px;
    max-width: 320px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .song-text {
    margin-top: 5px;
    line-height: 17px;
    font-size: 0;
  }

  .icon-sq {
    vertical-align: middle;
    margin-right: 3px;
    color: #d43c33;
  }

  .song-author {
    vertical-align: middle;
    font-size: 12px;
    color: #888;
  }

  .new-song {
    position: relative;
    margin-left: 10px;
    padding-bottom: 6px;
    padding-top: 5px;
    border-bottom: 1px solid #e2e2e3;
  }

  .play-icon-wrapper {
    position: absolute;
    display: block;
    font-size: 22px;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    color: #888;
  }

  .list .icon-sq {
    fill: #fe672e;
  }
</style>

