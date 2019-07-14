import axios from 'axios'

export function getRankSong() {
  let url = '/api/getRankSong'
  let data = {
    '-': 'getUCGI5662899233999037',
    g_tk: 1451191286,
    loginUin: 1950333426,
    hostUin: 0,
    format: 'json',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq.json',
    needNewCode: 0,
    data: '%7B"detail"%3A%7B"module"%3A"musicToplist.ToplistInfoServer"%2C"method"%3A"GetDetail"%2C"param"%3A%7B"topId"%3A4%2C"offset"%3A0%2C"num"%3A20%2C"period"%3A"2019-07-14"%7D%7D%2C"comm"%3A%7B"ct"%3A24%2C"cv"%3A0%7D%7D'
  }
  return axios.get(url, { params: data }).then((res) => {
    return res
  })
}