import React, { PropTypes } from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends React.Component {
  render () {
    return (
      <ul className='nav'>
        <li>
          <NavLink exact activeClassName='navActive' to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName='navActive' to='/battle'>Battle</NavLink>
        </li>
        <li>
          <NavLink activeClassName='navActive' to='/popular'>Popular</NavLink>
        </li>
      </ul>
    );
  }
}
