const cheerio = require('cheerio')
const fs = require('fs')
const Bagpipe = require('bagpipe')
const request = require('request')

let targetUrl = 'https://www.enterdesk.com/special/xiaoqingxin/'

function downloadImg(src, name, callback) {
  request(src)
    .pipe(fs.createWriteStream(name))
    .on('close', function () {
      callback()
    })
}
request.get(targetUrl, (err, res, data) => {
  if (!err && res.statusCode === 200) {
    let $ = cheerio.load(data)
    let imgArr = $('html').find('img')
    let imgSrc = []
    // 遍历获取图片信息
    for (let i = 0; i < imgArr.length; i++) {
      imgSrc.push(imgArr[i].attribs.src)
    }
    let len = imgSrc.length
    //批量下载
    const bagpipe = new Bagpipe(len)
    for (let i = 0; i < len; i++) {
      let filename = imgSrc[i].slice(imgSrc[i].lastIndexOf('/') + 1)
      bagpipe.push(downloadImg, imgSrc[i], './public/' + filename, function (
        err,
        data
      ) {
        if (err) {
          console.log(err)
        }
      })
    }
  }
})