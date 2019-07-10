export function createSong(song, songVkey) {
  return {
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${song.album.mid}.jpg?max_age=2592000`,
    url: `http://isure.stream.qqmusic.qq.com/C400${song.mid}.m4a?guid=6381157512&vkey=${songVkey}&uin=6642&fromtag=66`
  }
}


//https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg?-=MusicJsonCallback_lrc&pcachetime=1562773447067&songmid=000knnTl05SPQ6&g_tk=1451191286&loginUin=1950333426&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0



// export function createSong(musicData, songVkey) {
//   return new Song({
//     id: musicData.songid,
//     mid: musicData.songmid,
//     singer: filterSinger(musicData.singer),
//     name: musicData.songname,
//     album: musicData.albumname,
//     duration: musicData.interval,
//     image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
//     url: `http://isure.stream.qqmusic.qq.com/C400${musicData.songmid}.m4a?guid=9244517832&vkey=${songVkey}&uin=0&fromtag=66`
//   })
// }