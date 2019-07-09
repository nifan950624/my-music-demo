import jsonp from 'jsonp'

export function getJsonpData(url, opt) {
  return new Promise((resolve, reject) => {
    jsonp(url, opt, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}