/**
 * 管理员
 */
const express = require("express");
const admin = express.Router();
// 引入数据库
const { query } = require("../mysql");

admin.get("/admin", (req, res) => {
  let sql = "SELECT * FROM tables;";
  let sq = query(sql);
  console.log(sq);
  // res.send("hello world，I am ADMIN");
  res.send(sq);
});

module.exports = admin;
