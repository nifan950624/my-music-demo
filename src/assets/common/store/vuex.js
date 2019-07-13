import vuex from 'vuex'
import Vue from 'vue'

Vue.use(vuex)
export default new vuex.Store({
  state: {
    song: [],
    isShow: false
  },
  mutations : {
    addSong(state,song) {
      state.song = song
    },
    isShow(state,isShow) {
      state.isShow = isShow
    }
  }
})