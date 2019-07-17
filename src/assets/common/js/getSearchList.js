import axios from 'axios'

export async function getSearchList() {
  let url = '/api/getSearchList'
  let data = {
    _: new Date(),
    g_tk: 5381,
    uin: 0,
    format: 'json',
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'h5',
    needNewCode: 1,
  }
  return await axios.get(url, { params: data })
}

export async function getSearchSong(keyword,) {
  let url = '/api/getSearchSong'
  let data = {
    _: new Date(),
    g_tk: 5381,
    uin: 0,
    format: 'json',
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'h5',
    needNewCode: 1,
    w: keyword,
    zhidaqu: 0,
    catZhida: 0,
    t: 0,
    flag: 1,
    ie: 'utf-8',
    sem: 1,
    aggr: 0,
    perpage: 20,
    n: 20,
    p: 1,
    remoteplace: 'txt.mqq.all',
  }
  return await axios.get(url, { params: data })
}