<template>
  <ol class="song-list-container">
    <li
      @click="handleSongClick(song)"
      class="song-item"
      v-for="(song, index) of songlist"
      :key="song.id"
    >
      <div class="num" :class="{'active':index < 3}">{{index+1}}</div>
      <div class="song-info-wrapper border-bottom">
        <div class="song-info">
          <div class="song-title">{{song.songname || song.name}}</div>
          <div class="singer">{{song.singer[0].name}}</div>
        </div>
      </div>
      <div class="play-icon iconfont icon-bofanganniu"></div>
    </li>
  </ol>
</template>

<script>
export default {
  props: {
    songlist: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    handleSongClick(song) {
      this.$store.commit("isShow", true);
      this.$store.commit("addSong", song);
    }
  }
}
</script>

<style>

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

.num.active {
  color: #df3436;
}

.song-info-wrapper {
  flex: 1;
  padding: 6px 0;
}

.song-info-wrapper.border-bottom::before {
  border-color: rgba(7, 17, 27, 0.1);
}

.song-info-wrapper.border-bottom:last-child::before {
  display: none;
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
</style>
