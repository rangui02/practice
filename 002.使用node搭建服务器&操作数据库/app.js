/*
 * 构建服务器
 */
const express = require("express");
const app = express();
const { PORT } = require("./configs");
// 引入理由
const { router, customer, admin } = require("./route");

// 调用路由
app.use("/", router);
app.use("/cu", customer);
app.use("/ad", admin);

// 错误处理
app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// 开启服务器
app.listen(PORT, () => console.log("服务器端口号为：" + PORT));

/**
 * 一、第三方模块
  * 1.第三方模块 非必需
      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({ extended: false }));

 * 二、路由配置
  * 1. 分散写法
      // 引入路由
      const router = require("./route");
      const cutomer = require("./route/customer");
      const admin = require("./route/admin");
      // 调用路由
      app.use("/", router);
      app.use("/cu", cutomer);
      app.use("/ad", admin);
  * 2. 集中写法
      // 引入路由
      const { router, customer, admin } = require("./route");
      // 调用路由
      app.use("/", router);
      app.use("/cu", customer);
      app.use("/ad", admin);
 */
