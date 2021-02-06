import React from 'react';
import Header from './components/Header'
import HomePage from './containers/HomePage'
import PageError from './containers/PageError'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Header/>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/404" component={PageError}/>
        <Redirect path="*" to="/404"/>
      </Switch>
    </Router>
  );
}

export default App;
