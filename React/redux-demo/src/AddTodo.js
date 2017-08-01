import React, { PropTypes } from 'react'

export default class AddTodo extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    var text = this.textInput.value.trim();
    this.props.onAddClick(text);
    this.textInput.value = '';
  }

  render() {
    return (
      <div>
        <input type='text' ref={(input) => { this.textInput = input; }}/>
        <button onClick={ this.handleClick }>Add</button>
      </div>
    );
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
};
