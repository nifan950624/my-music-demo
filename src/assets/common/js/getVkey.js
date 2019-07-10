
import { getJsonpData } from './jsonp'
export function getVkey(songmid) {
  console.log(songmid)
  let url = 'https://u.y.qq.com/cgi-bin/musicu.fcg?-=getplaysongvkey2454756038761119&g_tk=1451191286&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0&data='
  let compUrl = url + keyUrl(songmid)
  return getJsonpData(compUrl, { param: "callback" }).then((res) => {
    return res.req_0.data.midurlinfo[0].vkey
  })
}


function keyUrl(songmid) {
  let data = `
  {"req":{"module":"CDN.SrfCdnDispatchServer","method":"GetCdnDispatch","param":{"guid":"6381157512","calltype":0,"userip":""}},"req_0":{"module":"vkey.GetVkeyServer","method":"CgiGetVkey","param":{"guid":"6381157512","songmid":["${songmid}"],"songtype":[0],"uin":"1950333426","loginflag":1,"platform":"20"}},"comm":{"uin": 0,"format":"json","ct":24,"cv":0}}
  `
  return songmid ? encodeURIComponent(data) : ''
}
