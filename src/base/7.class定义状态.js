import React from "react";

// 在 hooks 出来之前，函数式组件是没有自己的状态的。
// 步骤：初始化状态 -> 读取状态 -> 修改状态 -> 影响视图
class TestComponent extends React.Component {
  // 1. 定义状态
  state = {
    // 在这里可以定义各种属性，全都是当前组件的状态
    name: "jack",
  };
  React;
  // 3. 修改状态state 状态
  // 注意：不可以直接做赋值修改 必须通过一个方法 setState
  change = () => {
    this.setState({ name: "kobe" });
  };
  render() {
    // 2. 使用状态
    return (
      <>
        <button onClick={() => this.change()}>修改状态</button>
        <div>当前name值：{this.state.name}</div>
      </>
    );
  }
}

// root组件
function App() {
  return (
    <>
      <TestComponent />
    </>
  );
}

export default App;
