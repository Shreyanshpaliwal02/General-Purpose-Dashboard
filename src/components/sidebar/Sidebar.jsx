import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

export const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">_artagonist_</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title"> MAIN </p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>

          <p className="title"> LISTS </p>

          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>

          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreMallDirectoryIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>

          <Link to="/orders" style={{ textDecoration: "none" }}>
            <li>
              <ShoppingBagIcon className="icon" />
              <span>Orders</span>
            </li>
          </Link>

          <Link to="/delivery" style={{ textDecoration: "none" }}>
            <li>
              <LocalShippingIcon className="icon" />
              <span>Delivery</span>
            </li>
          </Link>

          <p className="title">USEFUL</p>

          <Link to="/stats" style={{ textDecoration: "none" }}>
            <li>
              <QueryStatsIcon className="icon" />
              <span>Stats</span>
            </li>
          </Link>

          <Link to="/notifications" style={{ textDecoration: "none" }}>
            <li>
              <NotificationsActiveIcon className="icon" />
              <span>Notifications</span>
            </li>
          </Link>

          <p className="title">SERVICES</p>

          <Link to="/syshealth" style={{ textDecoration: "none" }}>
            <li>
              <MonitorHeartIcon className="icon" />
              <span>System Health</span>
            </li>
          </Link>

          <Link to="/Logs" style={{ textDecoration: "none" }}>
            <li>
              <PsychologyIcon className="icon" />
              <span>Logs</span>
            </li>
          </Link>

          <Link to="/settings" style={{ textDecoration: "none" }}>
            <li>
              <SettingsIcon className="icon" />
              <span>Settings</span>
            </li>
          </Link>

          <p className="title">USER</p>

          <Link to="/profile" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>

          <li>
            <LogoutIcon className="icon" />
            <span>Log Out</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
