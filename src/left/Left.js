import "../asset/css/left.css";
import logo from "../asset/img/be.jpg";
import Detail from "../detail/detail";
import Details from "../details/details";

function Container() {
  const arrInfo = ["男", "上海", "1993.10.21"];
  return (
    <>
      <div className="leftGrid">
        <div className="leftG_a">
          <div className="leftG_logo">
            <div className="logo_img">
              <img src={logo}></img>
            </div>
            <div className="leftG_title">
              <h4>软件工程</h4>
              <p>SOFTWARE</p>
              <p>ENGINEERING</p>
            </div>
          </div>
          <div className="profile">
            <div className="profile_a">
              <div>
                <p>PROFILE</p>
                <p>李琦</p>
              </div>
              <div>
                {arrInfo.map((em, i) => (
                  <p key={i}>{em}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="leftG_b">
          <Detail />
          <Details />
        </div>
      </div>
    </>
  );
}

export default Container;
