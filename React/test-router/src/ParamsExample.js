import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class ParamsExample extends Component {
  render () {
    return (
      <Router>
        <div>
          <h2>帐号</h2>
          <ul>
            <li><Link to="/react-router">React Router</Link></li>
            <li><Link to="/leoashin">LeoAshin</Link></li>
            <li><Link to="/justjavac">justjavac</Link></li>
            <li><Link to="/reacttraining">React Training</Link></li>
          </ul>

          <Route path="/:id" component={ Child }/>
          <Route exact path="/" render={() => (
            <h3>请选择一个帐号。</h3>
          )}/>
        </div>
      </Router>
    );
  }
}


class Child extends React.Component {
  render () {
    return (
      <div>
        <h3>{ this.props.match.params.id }</h3>
      </div>
    );
  }
}
