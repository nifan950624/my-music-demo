<template>
  <div class="container" v-show="isShow">
    <div @click="handleBackClick" class="back iconfont icon-xiangshangjiantouarrowup"></div>
    <!-- header -->
    <div class="header-wrapper">
      <div class="header">
        <div class="header-opacity" 
        :style="{backgroundImage:`url(${currentList.logo})`}"></div>
        <div class="ablum-wrapper" style="width:126px;height:126px">
          <img :src="currentList.logo" width="126" height="126"/>
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
        <span class="dd" v-html="currentList.desc"></span>
      </div>
      <div class></div>
    </div>

    <!-- song-list -->
    <div class="song-list">
      <div class="title">歌曲列表</div>
      <songlist :songlist="currentList.songlist"></songlist>
    </div>

    <!-- footer -->
    <div class="collect-list border-top">
      <div class="collect-button">收藏歌单</div>
    </div>
  </div>
</template>

<script>
import songlist from '../songList/songList'
// import BScroll from 'better-scroll'
export default {
  props: {
    cdlist: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    songlist
  },
  data() {
    return {
      currentList: {},
      backgroundUrl: '',
      isShow: false
    };
  },
  watch: {
    cdlist() {
      this.currentList = this.cdlist[0]
      this.backgroundUrl = this.currentList.logo
      
    }
  },
  methods: {
    show() {
      this.isShow = true
    },
    handleBackClick() {
      this.isShow = false 
    },
  }
};
</script>

<style>
.container {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 50px;
  width: 100%;
  overflow: auto;
  z-index: 95;
  background: white;
}

.back {
  position:absolute;
  padding:5px;
  top:2px;
  left:10px;
  border-radius: 50%;
  z-index:55;
  color: white;
}

img {
  vertical-align: top;
}

.header-wrapper {
  position: relative;
  width: 100%;
  height: 186px;
  overflow: hidden;
  background: rgba(0, 15, 17, 0.4)
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


.collect-list {
  position: fixed;
  padding: 7px 0;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
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

