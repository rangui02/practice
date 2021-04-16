const https = require('https')

let url = 'https://www.enterdesk.com/special/xiaoqingxin/'

https.get(url, (res) => {
  // 1. close 参数 => 啥都没有看出来，关闭？
  // res.on('close', (close) => {
  //   console.log(close)
  // })
  // 2. data 参数 => buffer进制流
  // res.on('data', (data) => {
  //   console.log(data)
  // })
  // 3. end 参数 => 啥都没有看出来，结束？
  // res.on('end', (end) => {
  //   console.log(end)
  // })
  // 4. err 参数 => 显示错误信息
  // res.on('err', (err) => {
  //   console.log(err)
  // })
  // 5. 参数 => 啥都没有看出来
  // res.on('resume', (resume) => {
  //   console.log(resume)
  // })
})

// ps: 常用的为：end结束，data数据存储，err报错
