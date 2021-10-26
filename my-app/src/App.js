import Work from './Work'
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import TenxFinders from "./10xFinders"
import { Resume } from "./Resume"
import './App.css';

function App() {
  return (
    <Router>
        <Switch>
            <Route path="/" exact component={Work} />
            <Route path="/10xFinders" exact component={TenxFinders} />
            <Route path="/resume" exact component={Resume} />
        </Switch>
    </Router>
  );
}

export default App;



