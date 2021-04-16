/**
 * 客户
 */
const express = require("express");
const customer = express.Router();

customer.get("/index", (req, res) => {
  console.log(22222222222);
  res.send("hello world，I am CUSTOMER");
});

module.exports = customer;
