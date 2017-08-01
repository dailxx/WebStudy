import React, { PropTypes } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class CustomLinkExample extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="首页"/>
          <OldSchoolMenuLink to="/about" label="关于"/>
          <hr/>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    );
  }
}

class OldSchoolMenuLink extends React.Component {
  render () {
    return (
      <Route
        path={ this.props.to }
        exact={ this.props.activeOnlyWhenExact }
        children={(match) => (
          <div>
            { match ? '>' : '' }<Link to={ this.props.to }>{this.props.label}</Link>
          </div>
        )}/>
    );
  }
}

class Home extends React.Component {
  render () {
    return (
      <div>
        <h2>首页</h2>
      </div>
    );
  }
}

class About extends React.Component {
  render () {
    return (
      <div>
        <h2>关于</h2>
      </div>
    );
  }
}
