import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="component-header">
        <img
          src="https://cdn.jsdelivr.net/emojione/assets/png/1f638.png"
          role="presentation"
          width="32"
          height="32"/>
        Emoji Search
        <img
          src="https://cdn.jsdelivr.net/emojione/assets/png/1f63a.png"
          role="presentation"
          width="32"
          height="32"/>
      </header>
    );
  }
}

export default Header;
