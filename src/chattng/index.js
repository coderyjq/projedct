import http from "../http";
import "../asset/css/chatting.css";
import { useEffect, useState } from "react";
import getTime from "../Time";

function Chatting() {
  let [info, setInfo] = useState([]);
  let [msg, setmsg] = useState("");
  useEffect(() => {
    http("http://yapi.smart-xwork.cn/mock/84769/flora-test/list")
      .then((res) => {
        setInfo(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function addInfo() {
    let temp = {
      name: "游客",
      msg,
      time: getTime(new Date().getTime()),
    };
    info = [...info, temp];
    setInfo([...info]);
  }

  return (
    <>
      <div className="chatting">
        <div className="chatting_control">
          <input
            type="text"
            onChange={(e) => {
              setmsg(e.target.value);
            }}
          ></input>
          <button onClick={addInfo}>按钮</button>
        </div>
        <div className="chatting_list">
          <ul>
            {info.map((em, i) => (
              <li key={i}>
                <span>{em.name}</span>
                <div>{em.msg}</div>
                <p>{em.time}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Chatting;
