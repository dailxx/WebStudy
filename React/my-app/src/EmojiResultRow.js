import React from 'react';
import './EmojiResultRow.css'

class EmojiResultRow extends React.Component {
  render() {
    const codePointHex = this.props.symbol.codePointAt(0).toString(16);
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
    return (
      <div className="component-emoji-result-row">
        <img
          alt={ this.props.title }
          src={ src } />
          <span className="title">
            { this.props.title }
          </span>
      </div>
    );
  }
}

EmojiResultRow.propTypes = {
  title: React.PropTypes.string,
  symbol: React.PropTypes.string,
};

export default EmojiResultRow;
