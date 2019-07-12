
import { getJsonpData } from './jsonp'
import axios from 'axios'
//获取歌曲
export function createSong(song, songVkey) {

  return {
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${song.albummid ? song.albummid: song.album.mid }.jpg?max_age=2592000`,
    
    url: `http://isure.stream.qqmusic.qq.com/C400${song.mid ? song.mid : song.strMediaMid }.m4a?guid=6381157512&vkey=${songVkey}&uin=6642&fromtag=66`
  }
}

//获取歌词
export function getLyric(song) {
    let url = '/api/lyric'
    let data = {
        g_tk: 5381,
        uin: 0,
        format: 'json',
        inCharset: 'utf-8',
        outCharset: 'utf-8',
        notice: 0,
        platform: 'h5',
        needNewCode: 1,
        nobase64: 1,
        musicid: song.id ? song.id : song.songid,
        songtype: 0,
        _: new Date()
    }
    return axios.get(url, {params : data}).then((data) => {
        return data
    })
}
//获取歌曲的vkey
export function getVkey(songmid) {
  let url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'
  let data = {
    '-' : 'getplaysongvkey2454756038761119',
    g_tk: 1451191286,
    loginUin: "1950333426",
    hostUin: 0,
    format: 'json',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq.json',
    needNewCode: 0,
    data: `{"req":{"module":"CDN.SrfCdnDispatchServer","method":"GetCdnDispatch","param":{"guid":"6381157512","calltype":0,"userip":""}},"req_0":{"module":"vkey.GetVkeyServer","method":"CgiGetVkey","param":{"guid":"6381157512","songmid":["${songmid}"],"songtype":[0],"uin":"1950333426","loginflag":1,"platform":"20"}},"comm":{"uin": 0,"format":"json","ct":24,"cv":0}}`
  }
  return getJsonpData(url, data, {param: 'callback'}).then((data) => {
    let vkey = data.req_0.data.midurlinfo[0].vkey ? data.req_0.data.midurlinfo[0].vkey : data.req.data.vkey
    return vkey
  })
}
