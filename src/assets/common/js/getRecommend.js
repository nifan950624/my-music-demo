import { getJsonpData } from './jsonp'

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