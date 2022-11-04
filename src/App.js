import Left from "./left/Left";
import Right from "./Right/Right.js";
import Chatting from "./chattng/index";
import "./index.css";

function App() {
  return (
    <>
      <div className="boxGird">
        <Left />
        <Right />
      </div>
      <Chatting />
    </>
  );
}

export default App;
