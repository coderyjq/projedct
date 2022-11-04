// 有一个状态 type 1 2 3
// 分别是 红色 绿色 蓝色
// 1 -> h1
// 2 -> h2
// 3 -> h3

// 原则：模板中的逻辑尽量保持精简
// 复杂的多分支的逻辑 收敛为一个函数  通过一个专门的函数来写 分支逻辑 模板中只负责调用

const getHtag = (type) => {
  switch (type) {
    case 1:
      return <h1>this is h1</h1>;
      break;
    case 2:
      return <h2>this is h2</h2>;
      break;
    case 3:
      return <h3>this is h3</h3>;
      break;
  }
};

function App() {
  return <div>{getHtag(3)}</div>;
}

export default App;
