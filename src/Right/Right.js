import Abouteme from "../Abouteme/AbouteMe";

import "../asset/css/right.css";
import "../asset/icon/icon font.css";

function Right() {
  return (
    <>
      <div className="r_bo">
        <div className="right_super">
          <div className="right_header">
            <div>联系方式 / 社交媒体</div>
            <div className="classify">
              <i className="iconfont icon-email"></i>
              <span>Oliyeng93@hotmail.com</span>
              <i className="iconfont icon-tell"></i>
              <span>13566667573</span>
              <i className="iconfont icon-iconfontweixin"></i>
              <span>Yd_1116</span>
              <i className="iconfont icon-weibo"></i>
              <span>@unloooedDoor</span>
              <i className="iconfont icon-tupianzhaopian"></i>
              <span>@xuelang</span>
            </div>
          </div>
        </div>
        <div className="r_content">
          <Abouteme />
        </div>
      </div>
    </>
  );
}

export default Right;
