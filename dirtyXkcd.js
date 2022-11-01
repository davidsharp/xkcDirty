const http = require('https')

const initialRequest = "https://xkcd.com/info.0.json"
let results = []

const crawl = async () => {
  const lastestComic = await get(initialRequest)
  //results[lastestComic.num] = lastestComic.safe_title
  for(let i=1;i<=lastestComic.num;i++){
    if (i !== 404) {
      const comic = await get(`https://xkcd.com/${i}/info.0.json`)
      //results[i] = comic.safe_title
      console.log(comic.safe_title)
    }
  }
  //for(const title in results) console.log(title)
}

const get = (url) => {
  return new Promise((resolve) => {
    http.get(url, (res) => {
      res.setEncoding('utf8')
      let rawData = ''
      res.on('data', (chunk) => { rawData += chunk; })
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(rawData)
          resolve(parsedData)
        } catch (e) {
          console.error(e.message)
          console.log(rawData)
        }
      })
    })
  })
}

crawl()
