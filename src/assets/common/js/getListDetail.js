//请求歌单详情
import axios from 'axios'

export function getListDetail(songlist) {
  let url = '/api/getListDetail'
  let data = {
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    disstid: songlist.id,
    format: 'json',
    g_tk: '5381',
    loginUin: 0,
    hostUin: 0,
    inCharset:'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq',
    needNewCode: 0
  }
  return axios.get(url, {params: data}).then((res) => {
    return res
  })
}