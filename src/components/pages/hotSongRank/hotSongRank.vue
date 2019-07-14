<template>
  <div class="page-2">
    <div>
      <div class="header-wrapper">
        <div class="header">
          <div class="header-text">
            <div style="font-size: 15px;font-style:italic;">云音乐</div>
            <h1 style="font-size: 40px;font-weight: bold;margin-top:5px;">热歌榜</h1>
            <div></div>
          </div>
        </div>
      </div>
      <songlist :songlist="songlist"></songlist>
    </div>
  </div>
</template>

<script>
import { getRankSong } from "common/js/getRankSong";
import songlist from "../songList/songList";
const ERR_OK = 0;
export default {
  components: {
    songlist
  },
  data() {
    return {
      songlist: []
    };
  },
  methods: {
    _getRankSong() {
      getRankSong().then(res => {
        this.songlist = res.data.detail.data.songInfoList;
      });
    }
  },
  created() {
    this._getRankSong();
  }
};
</script>

<style scoped>
.page-2 {
  position: absolute;
  top: 105px;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: auto;
}

.header-wrapper {
  position: relative;
  width: 100%;
  height: 150px;
  overflow: hidden;
  background: url(//s3.music.126.net/mobile-new/img/hot_music_bg_2x.jpg?f01a252389c26bcf016816242eaa6aee=) no-repeat center center;
  background-image: cover;
}


.header {
  display: flex;
  padding: 30px 15px;
}

.header-text {
  margin-left: 16px;
  color: #fff;
}

</style>


