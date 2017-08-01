import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Battle from './Battle';
import Home from './Home';
import Popular from './Popular';
import Results from './Results';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />

          <Switch>
            <Route exact path="/" component={ Home }/>
            <Route exact path="/battle" component={ Battle }/>
            <Route path="/battle/results" component={ Results }/>
            <Route path="/popular" component={ Popular }/>
            <Route render={() => (
              <p>Not Found</p>
            )}/>
          </Switch>
        </div>
      </Router>
    );
  }
}
