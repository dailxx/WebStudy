import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/about">关于</Link></li>
            <li><Link to="/topics">主题列表</Link></li>
          </ul>

          <hr />

          <Route exact path="/" component={ Home }/>
          <Route path="/about" component={ About }/>
          <Route path="/topics" component={ Topics }/>

        </div>
      </Router>
    );
  }
}

export class Home extends Component {
  render() {
    return (
      <h2>首页</h2>
    );
  }
}

export class About extends Component {
  render() {
    return (
      <h2>关于</h2>
    );
  }
}

export class Topics extends Component {
  render() {
    let match = this.props.match;
    return (
      <div>
        <h2>主题列表</h2>
        <ul>
          <li><Link to={ `${match.url}/rendering` }>使用 React 渲染</Link></li>
          <li><Link to={ `${match.url}/components` }>组件</Link></li>
          <li><Link to={ `${match.url}/props-v-state` }>属性 vs 状态</Link></li>
        </ul>

        <Route path={ `${match.url}/:topicId` } component={ Topic }/>
        <Route exact path={ `${match.url}` } render={() => (
          <h3>请选择一个主题。</h3>
        )}/>
      </div>
    );
  }
}

export class Topic extends Component {
  render() {
    return (
      <div>
        <h3>{ this.props.match.params.topicId }</h3>
      </div>
    );
  }
}
