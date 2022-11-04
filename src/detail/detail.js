import "../asset/css/detail.css";

function Detail() {
  return (
    <>
      <div className="box">
        <div className="box_info">
          <div>
            <h3>教育经历</h3>
            <p>EDUCATION BACKGROUND</p>
          </div>
        </div>
        <div className="box_content">
          <div className="content_a">
            <p>上海觅知大学</p>
            <p>
              <span>软件工程 | 本科</span> <span>2012.09 - 2016.07</span>
            </p>
          </div>
          <div className="content_b">
            <p>主修课程</p>
            <p>
              C/C++程序设计、Java程序设计、数据结构、计算方法、编译原理、软件工程、操作系统原理】数据库系统原理、网络数据库等
            </p>
            <p>GPA: &nbsp; 38/4.0 在校四年均保持排名位于专业前20%</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
