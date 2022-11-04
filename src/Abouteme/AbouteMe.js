import "../asset/icon/icon font.css";
import "../asset/css/abouteMe.css";

function Abouteme() {
  const info = [
    { id: 1, name: "摄影", icon: "iconfont icon-a-tupianyihuifu-06" },
    { id: 2, name: "绘画", icon: "iconfont icon-V" },
    { id: 3, name: "旅行", icon: "iconfont icon-lvxing" },
    { id: 4, name: "音乐", icon: "iconfont icon-yinle" },
  ];
  return (
    <>
      <div className="about_container">
        <div className="about_title">
          <h3>ABOUT ME</h3>
          <p>
            软件工程专业背景，有丰富的软件开发经历，扎实的技术基础；工作细致认真，积极主动，有耐心，严谨；有较强的逻辑思维能力，善于分析、归纳、解决问题；有较强的沟通技巧及团队合作精神，组织协调能力，较强的责任感及进取精神；对技术有浓厚兴趣，喜欢并不断地学习新技术。
          </p>
        </div>
        <div className="about_skill">
          <h3>专业技能</h3>
          <div className="chart">
            <p></p>
            <p></p>
            <p></p>
          </div>
          <div className="descriptor">
            熟悉数据库原理和常用性能优化技术，以及NoSQL,Queue的原理、使用场景及限制
          </div>
        </div>
        <div className="about_language about_skill ">
          <h3>语言技能</h3>
          <div className="chart">
            <p></p>
            <p></p>
          </div>
          <div className="descriptor">全国计算机等级二级</div>
        </div>
        <div className="awards">
          <h3>奖项荣誉</h3>
          <p>
            IOI 2019 <span>Gold</span>
          </p>
          <p>
            AP Computer Sclence A &nbsp; <span>5</span>
          </p>
        </div>
        <div className="hobbies">
          <h3>兴趣爱好</h3>
          <ul className="hobbies_a">
            {info.map((em) => (
              <li key={em.id}>
                <i className={em.icon}></i>
                <span>{em.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Abouteme;
