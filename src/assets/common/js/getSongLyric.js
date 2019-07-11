import axios from 'axios'

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
        musicid: song.id,
        songtype: 0,
        _: 1562850205879,
        jsonpCallback:'jsonp1',
    }
    return axios.get(url, {params : data}).then((data) => {
        console.log(data)
        return data
    })
}
