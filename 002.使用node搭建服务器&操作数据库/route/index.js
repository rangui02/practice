/**
 * 路由配置
 */
const express = require("express");
const router = express.Router();

// 设置默认路径
router.get("/", (req, res) => {
  res.send("hello world，I am ROUTER");
});

// 引入子路由
const customer = require("./customer");
const admin = require("./admin");

// 合并导出
module.exports = {
  router,
  customer,
  admin,
};
