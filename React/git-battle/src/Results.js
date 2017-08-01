import React, { PropTypes } from 'react';
import Loading from './Loading';
import { PlayerPreview } from './Battle';
import { Link } from 'react-router-dom';
import api from './api';
import queryString from 'query-string';


class Profile extends React.Component {
  render() {
    var info = this.props.info;
    return (
      <PlayerPreview username={ info.login } avator={ info.avatar_url }>
        <ul className="space-list-items">
          { info.name && <li>{ info.name }</li> }
          { info.location && <li>{ info.location }</li> }
          { info.company && <li>{ info.company }</li> }
          <li>Followers: { info.followers }</li>
          <li>Following: { info.following }</li>
          <li>Public Repos: { info.public_repos }</li>
          { info.blog && <li><a href={ info.blog }>{ info.blog }</a></li> }
        </ul>
      </PlayerPreview>
    );
  }
}

Profile.propTypes = {
  info: PropTypes.object.isRequired
}


class Player extends React.Component {
  render() {
    var props = this.props;
    return (
      <div>
        <h1 className="header">{ props.label }</h1>
        <h3 style={{ textAlign: 'center' }}>Score: { props.score }</h3>
        <Profile info={ props.profile } />
      </div>
    );
  }
}

Player.propTypes = {
  label: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  profile: PropTypes.object.isRequired
}


export default class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true
    }
  }

  componentDidMount() {
    var players = queryString.parse(this.props.location.search);

    api.battle([
      players.playerOneName,
      players.playerTwoName
    ]).then((players) => {
      if (players === null) {
        this.setState({
          error: "Looks like there was an error. Check that both users exist on Github.",
          loading: false
        });
      } else {
        this.setState({
          winner: players[0],
          loser: players[1],
          loading: false
        });
      }
    });
  }

  render() {
    var error = this.state.error;
    var winner = this.state.winner;
    var loser = this.state.loser;
    var loading = this.state.loading;

    if (loading === true) {
      return <Loading />
    }

    if (error) {
      return (
        <div>
          <p>{ error }</p>
          <Link to="/battle">Reset</Link>
        </div>
      );
    }

    return (
      <div className="row">
        <Player
          label="Winner"
          score={ winner.score }
          profile={ winner.profile }/>
        <Player
          label="Loser"
          score={ loser.score }
          profile={ loser.profile }/>
      </div>
    );
  }
}
