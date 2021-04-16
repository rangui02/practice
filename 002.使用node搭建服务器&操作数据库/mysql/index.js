/**
 * 数据库操作
 */

// 导入数据库模块
const mysql = require("mysql");

// 连接数据库
const connection = mysql.createConnection({
  // 创建连接池
  host: "localhost",
  user: "rg",
  password: "123456",
  database: "mynode",
});

// 连接失败，则报错
connection.connect((err) => {
  if (err) throw err;
});

// 查询
function query(sql) {
  return connection.query(sql, (err, result) => {
    if (!err) return result;
  });
}
module.exports = {
  query,
};
