import React, { useState } from "react";

// function testCli(prp) {
//   console.log("2222222222", prp);
// }

// UseStates
export default function UseStates() {
  //
  const [testNum, testUse] = useState(0); // 设置testNum默认值
  // console.log("state", state);
  // console.log("testUse", testUse);

  function increment() {
    setTimeout(() => {
      testUse(testNum + 1);
      // console.log("2222222222", testNum);
    }, 1000);
  }

  return <div onClick={increment}>点击开始测试{testNum}</div>;
}
// 当你调用 useEffect 时，就是在告诉 React 在完成对 DOM 的更改后运行你的 useEffect 函数
// 相当于 componentDidMount 和 componentDidUpdate:
// useEffect(() => {
//   console.log(333, props);
// });


