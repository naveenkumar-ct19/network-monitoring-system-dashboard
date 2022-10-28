import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://cdn-icons-png.flaticon.com/512/356/356490.png"
                alt="user"
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Cloud-Computing</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">CloudComputing@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Subnet:</span>
                  <span className="itemValue">255.255.255.0</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Group:</span>
                  <span className="itemValue">Cloud Computing Lab</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Login Session ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last shutdown systems</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default Single;