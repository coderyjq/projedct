// 1. 普通变量
// 2. 函数
// 3. 表达式
const name = "jack";
const fn = () => 18;
// 4. 完成列表渲染 map渲染数据，注意要使用 唯一的 key， 用于提升 diff
const songs = [
  { id: 1, name: "jack" },
  { id: 2, name: "kobe" },
  { id: 3, name: "南山南" },
];
// 5. 条件渲染 方案： 三元表达式 与 逻辑与运算符 &&
const isFlag = true;

function App() {
  return (
    <div>
      {/* 表达式 */}
      <div>
        {name}
        {fn()}
        {isFlag ? "男" : "女"}
      </div>
      {/* 列表渲染 */}
      <ul>
        {/* map实现列表渲染 */}
        {songs.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      {/* 条件渲染 */}
      <div>
        {/* 三元表达式 */}
        {isFlag ? (
          <div>
            <p>p标签</p>
            <span>isFlag为true</span>
          </div>
        ) : (
          <span>isFlag为false</span>
        )}
        {/* 逻辑与 */}
        {isFlag && <div>逻辑与条件渲染</div>}
      </div>
    </div>
  );
}

export default App;
