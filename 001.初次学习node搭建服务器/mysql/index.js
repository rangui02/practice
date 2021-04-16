/*
 * @Author: your name
 * @Date: 2020-09-17 11:32:14
 * @LastEditTime: 2020-09-18 09:55:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \adminwebc:\Users\ccg\Desktop\node\abc\mysql\mysql.js
 */
// 搭建服务器以及调用数据库
const express = require("express");
const app = express();
const { PORT } = require("../config");
const mysql = require("mysql");

// 连接数据库
const DB = mysql.createConnection({
  host: "localhost",
  user: "rg",
  password: "123456",
  database: "mynode", // 可以在这里直接连接数据库
});

// 连接判断
DB.connect((err) => {
  if (err) throw err;
});

// 新建数据库
app.get("/admin", (req, res) => {
  let sql = "CREATE DATABASE ceshi";
  DB.query(sql, (err, result) => {
    if (err) res.send(err);
    else res.send(result);
    DB.end();
  });
});

// 创建表
app.get("/create", (request, response) => {
  let sql = "USE mynode; SELECT * FROM `tables`";
  DB.query(sql, (err, result) => {
    if (err) response.send(err);
    else response.send(result);
  });
});

// 查询
app.get("/query", (req, res) => {
  let sql = "SELECT * FROM tables;";
  DB.query(sql, (err, result) => {
    if (err) res.send(err);
    else res.send(result);
    DB.end();
  });
});

// 删除

// 修改

// 开启服务器
app.listen(PORT, () => console.log("服务器端口号为：" + PORT));
