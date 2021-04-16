// 引入http模块
const http = require("http");

// 创建服务器
http.createServer((request, response) => {
  // s1. 获取请求的路径(就是域名后的.)
  url = request.url;
  // s2. 获取 http 协议的版本
  version = request.httpVersion;
  // s3. 获取请求方式
  method = request.method;
  // s4. 获取请求头信息(object)
  headers = request.headers;
  // q1. 设置响应头
  response.setHeader("content-type", "text/html; charset=utf8");
  // q2. 设置响应信息
  response.write("这是响应体信息...");
  // q3. 结束响应
  response.end("<h1>响应结束</h1>");
}).listen(3000, () => {
  console.log("服务器已开启");
});

/**
 * http下面主要拥有属性
 * 01. connectionListener 连接侦听器
 * 02. Methods  方法
 * 03. STATUS_CODES  网络状态码
 * 04. Agent
 * 05. ClientRequest
 * 06. IncomingMessage
 * 07. OutgoingMessage
 * 08. Server
 * 09. ServerResponse
 * 10. createServer 服务器(常用)
 * 11. get
 * 12. maxHeaderSize
 * 13. globalAgent
 */