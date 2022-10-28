import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
//import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import DesktopAccessDisabledIcon from '@mui/icons-material/DesktopAccessDisabled';
//import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
//import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PowerIcon from '@mui/icons-material/Power';
import { Link } from "react-router-dom";


const Widget = ({ type }) => {
  let data;

  //temporary
  //const amount =11;
  //const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "TOTAL SYSTEMS",
        link: <Link to="/users" style={{ textDecoration: "none" }}>See all systems</Link>,
        amount:11,
        icon: (
          <SettingsSystemDaydreamIcon 
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ACTIVE SYSTEMS",
        link: <Link to="/users" style={{ textDecoration: "none" }}>
        View all active systems </Link>,
        amount:8,
        icon: (
          <PowerIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "IN-ACTIVE SYSTEMS",
        link: <Link to="/users" style={{ textDecoration: "none" }}>View all in-active systems</Link>,
        amount:3,
        icon: (
          <DesktopAccessDisabledIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
