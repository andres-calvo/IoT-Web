import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../views/Dashboard/Dashboard";
import Devices from "../views/Devices/Devices";
import Rooms from "../views/Rooms/Rooms";
import Security from "../views/Security/Security";
import Statistics from "../views/Statistics/Statistics";
import Members from "../views/Members/Members";
function Content() {
  return (
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
  );
}

export default Content;
