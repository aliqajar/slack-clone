import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Router>
        <>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" exact>
              <Header/>
            </Route>
          </Switch>
        </>
      </Router>      
    </div>
  );
}

export default App;
