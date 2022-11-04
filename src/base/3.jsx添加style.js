import "./index.css";

// jsx 样式控制
/*
  1. 行内样式
    -> 在元素身上绑定一个 style 属性就可以了。 原生一样
*/
const lineStyle = { color: "red", fontSize: "100px" };

// 2. 类名样式 -> 在元素身上绑定你一个 className 属性即可

// 3. 动态控制active 类名
let isFlag = true;

function App() {
  return (
    <>
      {/* 行内 */}
      <h1 style={lineStyle}>this is h1</h1>
      {/* 类名样式 className */}
      <p className="box">类名样式</p>
      {/* 动态控制 active 类名 */}
      <div className={isFlag ? "active" : ""}>动态控制active</div>
    </>
  );
}

export default App;
