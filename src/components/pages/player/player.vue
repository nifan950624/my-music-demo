<template>
  <div class="player">
    <div class="page">
      <div class="page-opacity" >
      </div>
      <audio :src="songUrl" ref="audio"></audio>
      <div class="disc-container" 
      :class="{playing : isplay}">
        <img
          class="pointer"
          src="//s3.music.126.net/m/s/img/needle-ip6.png?be4ebbeb6befadfcae75ce174e7db862 "
          alt
        />
        <div class="disc">
          <div class="icon-wrapper">
            <div
            v-show="!isplay" 
            class="iconfont icon-play"
            @click="handleMusicClick"
            ></div>
            <div class="iconfont icon-pause"
            @click="handleMusicClick"
            v-show="isplay"
            ></div>
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
          <img src="#" alt class="cover" />
        </div>
      </div>
      <div class="song-description">
        <h1></h1>
        <div class="lyric">
          <div class="lines"></div>
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
import { getVkey } from "common/js/getVkey.js";
import { createSong } from "common/js/getSong.js";
export default {
  name: "player",
  data() {
    return {
      vKey: "",
      songmid: "",
      songUrl: "",
      isplay: false
    };
  },
  watch: {
    vKey() {
      this.songUrl = createSong(this.songmid, this.vKey).url;
    }
  },
  methods: {
    getSong(mid) {
      getVkey(mid).then(key => {
        this.vKey = key;
      })
    },
    handleMusicClick(e) {
      this.isplay = !this.isplay
      if(this.isplay) {
        this.$refs.audio.play()
      }
      else {
        this.$refs.audio.pause()
      }
    }
  },
  created() {
    this.songmid = this.$route.params.song;
    this.getSong(this.songmid);
  }
};
</script>

<style scoped>
.player {
  position: fixed;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 99;
  background: grey;
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
  background: rgba(0, 0, 0, 0.3);
}

.page-opacity {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  filter: blur(10px);
  background: url() no-repeat center center;
  background-size: cover;
  z-index: -1;
}

.disc-container {
  position: relative;
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
  transform-origin: 1.5vw 0vh;
  transform: rotate(-20deg);
  transition: all 0.4s;
}

.disc-container.playing .pointer {
  transition: all 0.4s;
  transform: rotate(0deg);
  width: 24vw;
  position: absolute;
  left: 45vw;
}

.disc-container .disc {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 18vw;
}

.disc-container .ring {
  width: 72vw;
}

.disc-container .light {
  width: 72vw;
  position: absolute;
}

.disc-container .cover {
  width: 44.5vw;
  position: absolute;
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

