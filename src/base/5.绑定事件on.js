import React from "react";
// 事件绑定 -> on + 事件名（大写字母开头 例如：Click）

class Ignore extends React.Component {
  render() {
    return (
      <>
        {/* 类中事件回调函数（标准写法 避免this 指向的问题） */}
        {/* 箭头函数 这样写 回调函数中的 this 指向的是当前组件实例对象 */}
        <div onClick={() => console.log(this)}>this is Ignore Component</div>
      </>
    );
  }
}

function App() {
  return (
    <>
      <span
        onClick={() => {
          console.log("onClick");
        }}
      >
        this is span
      </span>
      <Ignore></Ignore>
    </>
  );
}

export default App;
