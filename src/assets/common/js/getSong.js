export function createSong(mid, songVkey) {
  return {
    // image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.album.mid}.jpg?max_age=2592000`,
    url: `http://isure.stream.qqmusic.qq.com/C400${mid}.m4a?guid=6381157512&vkey=${songVkey}&uin=6642&fromtag=66`
  }
}