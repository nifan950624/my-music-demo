import Vue from 'vue'
import Router from 'vue-router'
import recommends from '@/components/pages/recommends/recommends'
import hotSongRank from '@/components/pages/hotSongRank/hotSongRank'
import searchSong from '@/components/pages/searchSong/searchSong'
import player from '@/components/pages/player/player'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/recommends',
    },
    {
      path: '/recommends',
      component: recommends
    },
    {
      path: '/hotSongRank',
      component: hotSongRank
    },
    {
      path: '/searchSong',
      component: searchSong
    },
    {
      path: '/player/:song',
      component: player
    }
  ]
})
