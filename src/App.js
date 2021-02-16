import "./App.scss";
import RightSidebar from "./components/RightSidebar";
import { Route, BrowserRouter as Router, Switch, NavLink } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import { BiTachometer, BiHome, BiDevices, BiShield, BiBarChart, BiUser, BiPowerOff } from "react-icons/bi";
import Dashboard from "./views/Dashboard";
import Devices from "./views/Devices";
import Rooms from "./views/Rooms";
import Security from "./views/Security";
import Statistics from "./views/Statistics";
import Members from "./views/Members";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Start Left Sidebar */}
        <div className="sidebar sidebar-left">
          <div className="logo">
            <FcHome size="3em" />
          </div>
          <div className="routes">
            <NavLink activeClassName="tab-active" className="tab" to="/">
              <BiTachometer /> <span>Dashboard</span>
            </NavLink>
            <NavLink activeClassName="tab-active" className="tab" to="/rooms">
              <BiHome /> <span>Rooms</span>
            </NavLink>
            <NavLink activeClassName="tab-active" className="tab" to="/devices">
              <BiDevices /> <span>Devices</span>
            </NavLink>
            <NavLink activeClassName="tab-active" className="tab" to="/security">
              <BiShield /> <span>Security</span>
            </NavLink>
            <NavLink activeClassName="tab-active" className="tab" to="/statistics">
              <BiBarChart /> <span>Statistics</span>
            </NavLink>
            <NavLink activeClassName="tab-active" className="tab" to="/members">
              <BiUser /> <span>Members</span>
            </NavLink>
            <NavLink className="tab logout" to="/logout">
              <BiPowerOff /> <span>Logout</span>
            </NavLink>
          </div>
        </div>
        {/* End of Left Sidebar */}
        <div className="main-container">
          <header>
            <input type="text" name="" id="search" placeholder="Search" />
            <span id="date">
              <strong>Monday,</strong> 15 February 2021
            </span>
          </header>
          <Switch>
            <Route path="/" exact>
              <Dashboard />
            </Route>
            <Route path="/rooms">
              <Rooms />
            </Route>
            <Route path="/devices">
              <Devices />
            </Route>
            <Route path="/security">
              <Security />
            </Route>
            <Route path="/statistics">
              <Statistics />
            </Route>
            <Route path="/members">
              <Members />
            </Route>
          </Switch>
        </div>

        <RightSidebar />
      </Router>
    </div>
  );
}

export default App;
