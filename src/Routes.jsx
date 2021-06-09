import React from "react";
import { Route, HashRouter } from "react-router-dom";

import Login from "./pages/Login";

function Routes() {
  return (
    <HashRouter basename="/">
      <Route path="/" component={Login} />
    </HashRouter>
  );
}

export default Routes;
