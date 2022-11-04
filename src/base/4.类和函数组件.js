import React from "react";
import "./index.css";

// 1. 函数组件
function HelloComponent() {
  return <>Hello</>;
}

// 类组件
class HelloComponents extends React.Component {
  constructor() {
    super();
  }
  // render 函数
  render() {
    return (
      <>
        <span>this is span</span>
      </>
    );
  }
}

function App() {
  return (
    <>
      {/* 渲染函数组件 */}
      <HelloComponent></HelloComponent>
      <HelloComponent />
      {/* 渲染类组件 */}
      <HelloComponents></HelloComponents>
      <HelloComponents />
    </>
  );
}

export default App;
