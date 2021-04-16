// cheerio用来获取抓取到的页面结构
const cheerio = require('cheerio')
// superagent是node里的第三方客户端请求代理模块
const superagent = require('superagent')
const https = require('https')
const fs = require('fs')

// 目标路径
let targetUrl = 'https://www.enterdesk.com/special/xiaoqingxin/'
// 通过路径获取页面数据信息
superagent.get(targetUrl).end((err, res) => {
  let $ = cheerio.load(res.text) // 获取DOM树
  let imgArr = $('html').find('img')
  let imgBuffers = []
  let size = 0
  // 遍历获取图片信息
  for (let i = 0; i < imgArr.length; i++) {
    https.get(imgArr[i].attribs.src, { encoding: null }, (res) => {
      const _arr = imgArr[i].attribs.src.split('.')
      const suffix = _arr[_arr.length - 1] // 图片后缀名
      res.on('data', (chunk) => {
        // 将图片数据转换为进制流
        imgBuffers.push(chunk)
        size += chunk.length
      })
      // 写入图片
      res.on('end', () => {
        const buffer = Buffer.concat(imgBuffers, size)
        fs.writeFile(
          `image/${imgArr[i].attribs.title}.${suffix}`,
          buffer,
          (err) => {
            if (err) console.error(err)
            console.log('数据写入成功！', i)
          }
        )
      })
    })
  }
})
