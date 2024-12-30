import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import BorrowList from "../components/Content";

function Way() {
  return (
    <Router>
      <Switch>
        
        <Route path="/borrowlist" component ={BorrowList} />
        
      </Switch>
    </Router>
  );
}

export default Way;

