'use strict'
// ps：文件读写有同步和异步之分，当有sync后缀时为同步，否则为异步；node.js默认支持异步读取文件。
// 引入文件模块
const fs = require('fs')
/*
 * fs 主要有几个操作：
 * 1. 读
 * 2. 写
 */

// 读
fs.readFile('./read.txt', 'utf-8', function (err, data) {
  if (err) console.log(err)
  else console.log(data)
})
// 同步读取
// var data = fs.readFileSync('./read.txt', 'utf-8');

// 写 - 即从无到有，故为创建生成
var data = 'Hello, I am writeFile!'
fs.writeFile('./write.txt', data, function (err) {
  if (err) console.log(err)
  else console.log('ok')
})

// 同步写入
// fs.writeFileSync('./writeSync.txt', data);

// fs技能1：获取文件信息
fs.stat('./write.txt', function (err, stat) {
  if (err) {
    console.log(err)
  } else {
    // 是否是文件:
    console.log('是否是文件isFile: ' + stat.isFile())
    // 是否是目录文件:
    console.log('是否是目录文件isDirectory: ' + stat.isDirectory())
    if (stat.isFile()) {
      // 文件大小:
      console.log('文件大小size：' + stat.size)
      // 创建时间, Date对象:
      console.log('创建时间birth time: ' + stat.birthtime)
      // 修改时间, Date对象:
      console.log('修改时间modified time: ' + stat.mtime)
    }
  }
  // 输出信息
  // 是否是文件isFile: true
  // 是否是目录文件isDirectory: false
  // 文件大小size：22
  // 创建时间birth time: Sat Sep 19 2020 11:23:25 GMT+0800 (GMT+08:00)
  // 修改时间modified time: Sat Sep 19 2020 11:30:22 GMT+0800 (GMT+08:00)
})
