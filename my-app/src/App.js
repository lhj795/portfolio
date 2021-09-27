import Work from './Work'
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import TenxFinders from "./10xFinders"
import './App.css';

function App() {
  return (
    <Router>
        <Switch>
            <Route path="/" exact component={Work} />
            <Route path="/10xFinders" exact component={TenxFinders} />
        </Switch>
    </Router>
  );
}

export default App;



