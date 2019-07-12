<template>
  <div class="container" v-show="cdlist.length">
    <!-- header -->
    <div class="header-wrapper">
      <div class="header">
        <div class="header-opacity" 
        :style="{backgroundImage:`url(${currentList.logo})`}"></div>
        <div class="ablum-wrapper">
          <img :src="currentList.logo" width="126" height="126" style="background:black" />
        </div>
        <div class="header-text">
          <h1 class="list-title">{{currentList.dissname}}</h1>
          <div class="author">
            <img class="avator" :src="currentList.headurl" width="30" height="30" style="margin-right:10px; border-radius: 50%" />
            <span class="author-name" style="vertical-align: middle">{{currentList.nickname}}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="songlist-desc">
      <div class="desc">
        <span class="dt">简介:</span>
        <span class="dd">{{currentList.desc}}</span>
      </div>
      <div class></div>
    </div>

    <!-- song-list -->
    <div class="song-list">
      <div class="title">歌曲列表</div>
      <ol class="song-list-container">
        <li 
        @click="handleSongClick(song)"
        class="song-item" v-for="(song, index) of currentList.songlist" :key="song.id">
          <div class="num">{{index+1}}</div>
          <div class="song-info-wrapper border-bottom">
            <div class="song-info">
              <div class="song-title">{{song.songname}}</div>
              <div class="singer">{{song.singer[0].name}}</div>
            </div>
          </div>
          <div class="play-icon iconfont icon-bofanganniu"></div>
        </li>
      </ol>
    </div>

    <!-- footer -->
    <div class="collect-list">
      <div class="collect-button">收藏歌单</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cdlist: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentList: {},
      backgroundUrl: ''
    };
  },
  watch: {
    cdlist() {
      this.currentList = this.cdlist[0];
      this.backgroundUrl = this.currentList.logo 
    }
  },
  methods: {
    handleSongClick(song) {
      this.$store.commit('addSong',song)
    }
  }
};
</script>

<style>
.container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  z-index: 10;
  background: white;
}

img {
  vertical-align: top;
}

.header-wrapper {
  position: relative;
  width: 100%;
  height: 186px;
  overflow: hidden;
}

.header-opacity {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: no-repeat center center;
  background-image: cover;
  z-index: -1;
  filter: blur(10px)
}

.header {
  display: flex;
  padding: 30px 15px;
}

.header-text {
  margin-left: 16px;
}

.list-title {
  padding-top: 1px;
  font-size: 17px;
  line-height: 1.3;
  color: #fefefe;
  height: 44px;
}

.author {
  margin-top: 10px;
  font-size: 0;
}

.avator {
  vertical-align: middle;
}

.author-name {
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  color: hsla(0, 0%, 100%, 0.7);
}

.songlist-desc {
  margin: 0 10px 0 15px;
  padding: 10px 0;
  line-height: 19px;
  color: #666;
}

.title {
  height: 23px;
  line-height: 23px;
  padding: 0 10px;
  font-size: 12px;
  color: #666;
  background-color: #eeeff0;
}

.dd {
  text-indent: 2em;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}

.song-item {
  position: relative;
  display: flex;
}

.num {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  font-size: 17px;
  font-weight: 700;
  text-align: center;
  color: #999;
}

.song-list-container {
  padding-bottom: 54px;
}

.song-info-wrapper {
  flex: 1;
  padding: 6px 0;
}

.song-info-wrapper.border-bottom::before {
  border-color: rgba(7, 17, 27, 0.1);
}

.song-title {
  font-size: 17px;
  line-height: 24px;
  margin-right: 35px;
}

.singer {
  font-size: 12px;
  color: #888;
}

.play-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 25px;
  color: rgba(7, 17, 27, 0.3);
}

.collect-list {
  position: fixed;
  padding: 7px 0;
  bottom: 0;
  left: 0;
  width: 100%;
}

.collect-button {
  margin: 0 30px;
  height: 40px;
  line-height: 40px;
  color: #fff;
  background-color: #d33a31;
  text-align: center;
  font-size: 16px;
  border-radius: 36px;
}
</style>

