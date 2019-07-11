import jsonp from 'jsonp'

export function getJsonpData(url,data,opt) {
  let newUrl = url + '?' + getUrl(data)
  return new Promise((resolve, reject) => {
    jsonp(newUrl, opt, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

function getUrl(data) {
  let url = ''
  for (let k in data) {
    let value = data[k]
    url += '&'+ k + '=' + encodeURIComponent(value) 
  }
  return url ? url.substring(1) : ''
}




