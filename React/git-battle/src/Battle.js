import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';


class PlayerInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    var value = event.target.value;

    this.setState({ username: value});
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(
      this.props.id,
      this.state.username
    );
  }

  render() {
    return (
      <form className="column" onSubmit={ this.handleSubmit }>
        <label className="header" htmlFor="username">{ this.props.label }</label>
        <input
          id="username"
          placeholder="github username"
          type="text"
          value={ this.state.username }
          autoComplete="off"
          onChange={ this.handleChange }/>
        <button
          className="button"
          type="submit"
          disabled={ !this.state.username }>
          Submit
        </button>
      </form>
    );
  }
}

PlayerInput.PropTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}

PlayerInput.defaultProps = {
  label: 'Username'
}


export class PlayerPreview extends React.Component {
  render() {
    var props = this.props;
    return (
      <div>
        <div className="column">
          <img
            className="avatar"
            src={ props.avator }
            alt={ 'Avatar for ' + props.username }/>
          <h2 className='username'>@{ props.username }</h2>
        </div>
        { props.children }
      </div>
    );
  }
}

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};


export default class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOneName: "",
      playerTwoName: "",
      playerOneImage: null,
      playerTwoImage: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(id, username) {
    var newState = {};
    newState[id + "Name"] = username;
    newState[id + "Image"] = "https://github.com/" + username + ".png?size=200";
    this.setState(newState);
  }

  handleReset(id) {
    var newState = {};
    newState[id + "Name"] = "";
    newState[id + "Image"] = null;
    this.setState(newState);
  }

  render() {
    var match = this.props.match;
    var playerOneName = this.state.playerOneName;
    var playerOneImage = this.state.playerOneImage;
    var playerTwoName = this.state.playerTwoName;
    var playerTwoImage = this.state.playerTwoImage;

    return (
      <div>
        <div className="row">
          {
            !playerOneName &&
            <PlayerInput
              id="playerOne"
              label="Player One"
              onSubmit={ this.handleSubmit }/>
          }
          {
            playerOneImage !== null &&
            <PlayerPreview
              avator={ playerOneImage }
              username={ playerOneName }>
              <button
                className="reset"
                onClick={ this.handleReset.bind(this, "playerOne") }>
                Reset
              </button>
            </PlayerPreview>
          }
          {
            !playerTwoName &&
            <PlayerInput
              id="playerTwo"
              label="Player Two"
              onSubmit={ this.handleSubmit }/>
          }
          {
            playerTwoImage !== null &&
            <PlayerPreview
              avator={ playerTwoImage }
              username={ playerTwoName }>
              <button
                className="reset"
                onClick={ this.handleReset.bind(this, "playerTwo") }>
                Reset
              </button>
            </PlayerPreview>
          }
        </div>
        {
          playerOneImage && playerTwoImage &&
          <Link
            className="button"
            to={{
              pathname: match.url + "/results",
              search: "?playerOneName=" + playerOneName + "&playerTwoName=" + playerTwoName
            }}>
            Battle
          </Link>
        }
      </div>
    );
  }
}
