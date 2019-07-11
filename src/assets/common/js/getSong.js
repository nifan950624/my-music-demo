export function createSong(song, songVkey) {
  
  return {
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${song.album.mid}.jpg?max_age=2592000`,
    
    url: `http://isure.stream.qqmusic.qq.com/C400${song.mid}.m4a?guid=6381157512&vkey=${songVkey}&uin=6642&fromtag=66`
  }
}