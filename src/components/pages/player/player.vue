<template>
  <div class="player" v-show="isShow">
    <div @click="handleBackClick" class="back iconfont icon-back"></div>
    <div class="page">
      <div class="page-opacity" :style="{backgroundImage: `url(${songMsg.image})`}"></div>
      <audio @ended="audioEnd" :src="songMsg.url" ref="audio"></audio>
      <div class="disc-container" :class="{playing : isplay}">
        <img
          class="pointer"
          src="//s3.music.126.net/m/s/img/needle-ip6.png?be4ebbeb6befadfcae75ce174e7db862 "
          alt
        />
        <div class="disc">
          <div class="icon-wrapper">
            <div v-show="!isplay" class="iconfont icon-play" @click="handleMusicClick"></div>
            <div class="iconfont icon-pause" @click="handleMusicClick" v-show="isplay"></div>
          </div>
          <img
            class="ring"
            src="//s3.music.126.net/m/s/img/disc-ip6.png?69796123ad7cfe95781ea38aac8f2d48"
            alt
          />
          <img
            class="light"
            src="//s3.music.126.net/m/s/img/disc_light-ip6.png?996fc8a2bc62e1ab3f51f135fc459577"
            alt
          />
          <img :src="songMsg.image" alt class="cover"/>
        </div>
      </div>
      <div class="song-description">
        <h1>{{song.name || song.songname}}</h1>
        <div class="lyric">
          <div class="lines" :style="{'transform':translate}">
            <p
              v-for="(lyric,index) of songLyric.lines"
              :key="index"
              :class="{'active': currentNum === index}"
            >{{lyric.txt}}</p>
          </div>
        </div>
      </div>
      <div class="links">
        <a href="#">打开</a>
        <a class="main" href="#">下载</a>
      </div>
    </div>
  </div>
</template>

<script>
  import {getVkey, createSong, getLyric} from "common/js/getSong.js";
  import Lyric from "lyric-parser";
  import {Base64} from "js-base64";

  export default {
    name: "player",
    data() {
      return {
        song: {},
        vKey: "",
        isplay: false,
        songMsg: {},
        songLyric: "",
        currentNum: 0,
        translate: 0,
        isShow: false
      };
    },
    watch: {
      "$store.state.song": function () {
        this.song = this.$store.state.song;
        this.getSong(this.song.mid || this.song.songmid);
        this.getSongLyric(this.song);
      },
      "$store.state.isShow": function () {
        this.isShow = this.$store.state.isShow;
        this.isplay = true;
      },
      currentNum() {
        this.translate = `translateY(${-(this.currentNum - 1) * 24 + "px"})`;
      },
      vKey() {
        this.songMsg = createSong(this.song, this.vKey);
        if (this.songMsg.url) {
          this.isplay = true;
          //延时获取数据后再播放
          setTimeout(() => {
            this.$refs.audio.play();
          }, 20);
        }
      }
    },
    methods: {
      handleBackClick() {
        this.isShow = false;
        this.$store.commit("isShow", false);
      },
      audioEnd() {
        this.isplay = false;
      },
      getSong(mid) {
        getVkey(mid).then(key => {
          this.vKey = key;
        });
      },

      //获取歌词
      getSongLyric(song) {
        if (this.songLyric) {
          this.songLyric.stop();
        }
        getLyric(song).then(res => {
          let lyric = Base64.decode(res.data.lyric);
          this.songLyric = new Lyric(lyric, this.handleLyric);
          if (this.isplay) {
            this.songLyric.play();
          }
        });
      },

      handleLyric({lineNum, txt}) {
        this.currentNum = lineNum;
      },

      handleMusicClick(e) {
        this.isplay = !this.isplay;
        if (this.isplay) {
          this.$refs.audio.play();
        } else {
          this.$refs.audio.pause();
        }
        if (this.songLyric) {
          this.songLyric.togglePlay();
        }
      }
    }
  };
</script>

<style scoped>
  .player {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 99;
    background: grey;
  }

  .back {
    position: absolute;
    padding: 5px;
    top: 20px;
    left: 10px;
    border-radius: 50%;
    z-index: 55;
    color: #aeabac;
  }

  @keyframes circle {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .page {
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: relative;
    background: rgba(0, 0, 0, 0.5);
  }

  .page-opacity {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    filter: blur(10px);
    background: grey no-repeat center center;
    background-size: cover;
    z-index: -1;
  }

  .disc-container {
    position: relative;
    height: 60vh;
  }

  .disc-container .icon-wrapper {
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    height: 20vw;
    width: 20vw;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.5);
  }

  .disc-container .iconfont {
    padding: 10px;
    font-size: 30px;
    color: #fff;
  }

  .disc-container .iconfont.icon-play {
    margin-left: 5px;
  }

  .disc-container .pointer {
    width: 24vw;
    position: absolute;
    left: 45vw;
    z-index: 3;
  }

  .disc-container .disc {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .disc-container .ring {
    position: absolute;
    width: 72vw;
  }

  .disc-container .light {
    position: absolute;
    width: 72vw;
  }

  .disc-container .cover {
    width: 44.5vw;
    border-radius: 50%;
    animation: circle 20s infinite linear;
    animation-play-state: paused;
  }

  .disc-container.playing .light,
  .disc-container.playing .cover {
    animation-play-state: running;
  }

  .song-description {
    flex-grow: 1;
    padding: 0 10px;
    color: #aeabac;
    text-align: center;
    line-height: 2;
    margin-top: 20px;
  }

  .song-description h1 {
    color: white;
    font-size: 18px;
  }

  .song-description p {
    font-size: 14px;
    line-height: 24px;
  }

  .song-description .lines {
    transition: transform 0.3s;
    color: #ddd;
  }

  .song-description .lyric {
    height: 72px;
    overflow: hidden;
  }

  .song-description p {
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .song-description p.active {
    color: orange;
  }

  .page > .links {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #d43b32;
  }

  .page > .links > a {
    width: 38.5vw;
    margin: 1em;
    text-align: center;
    border: 1px solid #d43b32;
    background: transparent;
    padding: 1.5vw;
    color: inherit;
    text-decoration: none;
    border-radius: 1.3vw;
    letter-spacing: 1vw;
  }

  .page > .links > a.main {
    background: #d43b32;
    color: white;
  }
</style>

