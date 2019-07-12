import { getJsonpData } from './jsonp'
import axios from 'axios'

//请求热门歌单
export function getRecommend() {
  let url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  let data = {
    g_tk: 5381,
    uin: 0,
    notice: 0
  }
  return getJsonpData(url, data, { param: "jsonpCallback" }).then((data) => {
    return data
  })
}

//请求新歌单列表
export function getNewSong() {
  let url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'
  let data = {
    '-': 'recom8252880194081378',
    g_tk: 1451191286,
    loginUin: 1950333426,
    hostUin: 0,
    format: 'json',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq.json',
    needNewCode: 0,
    data: '{"comm":{"ct":24},"category":{"method":"get_hot_category","param":{"qq":""},"module":"music.web_category_svr"},"recomPlaylist":{"method":"get_hot_recommend","param":{"async":1,"cmd":2},"module":"playlist.HotRecommendServer"},"playlist":{"method":"get_playlist_by_category","param":{"id":8,"curPage":1,"size":40,"order":5,"titleid":8},"module":"playlist.PlayListPlazaServer"},"new_song":{"module":"newsong.NewSongServer","method":"get_new_song_info","param":{"type":5}},"new_album":{"module":"newalbum.NewAlbumServer","method":"get_new_album_info","param":{"area":1,"sin":0,"num":10}},"new_album_tag":{"module":"newalbum.NewAlbumServer","method":"get_new_album_area","param":{}},"toplist":{"module":"musicToplist.ToplistInfoServer","method":"GetAll","param":{}},"focus":{"module":"QQMusic.MusichallServer","method":"GetFocus","param":{}}}'
  }
  return getJsonpData(url, data, { param: "callback" }).then((data) => {
      return data
  })
}
