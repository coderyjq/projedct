function App() {
  // 事件e +  参数传参
  const fn = function (e, msg) {
    console.log(e);
    console.log(msg);
  };
  return (
    <>
      <a
        href="www.baidu.com"
        // 事件对象event
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        链接
      </a>
      {/* 1. 传参 2. e 传参 */}
      <span onClick={(e) => fn(e, "msg")}>this is span</span>
    </>
  );
}

export default App;
