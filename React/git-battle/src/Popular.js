import React, { PropTypes } from 'react'
import api from './api';
import Loading from './Loading';


class SelectLanguage extends React.Component {
  render() {
    var props = this.props;
    var languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];
    return (
      <ul className="languages">
        {
          languages.map((lang) => {
            return (
              <li
                style={ lang === props.selectedLanguage ? { color: "#d0021b" } : null }
                onClick={ props.onSelect.bind(null, lang) }
                key={ lang }>
                { lang }
              </li>
            );
          })
        }
      </ul>
    );
  }
}


class RepoGrid extends React.Component {
  render() {
    return (
      <ul className="popular-list">
        {
          this.props.repos.map((repo, index) => {
            return (
              <li key={ repo.name } className="popular-item">
                <div className="popular-rank">#{ index + 1}</div>
                <ul className="space-list-items">
                  <li>
                    <img
                      className="avatar"
                      src={ repo.owner.avatar_url }
                      alt={ "Avatar for " + repo.owner.login }/>
                  </li>
                  <li><a href={ repo.html_url }>{ repo.name }</a></li>
                  <li>@{ repo.owner.login }</li>
                  <li>{ repo.stargazers_count } stars</li>
                </ul>
              </li>
            );
          })
        }
      </ul>
    );
  }
}

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired,
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default class Popular extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: 'All',
      repos: null
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(lang) {
    this.setState({
      selectedLanguage: lang,
      repos: null
    });

    api.fetchPopularRepos(lang).then((repos) => {
      this.setState({
        repos: repos
      });
    }).bind(this);
  }

  render () {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={ this.state.selectedLanguage }
          onSelect={ this.updateLanguage }/>
        {
          !this.state.repos
            ? <Loading />
            : <RepoGrid repos={this.state.repos} />
        }
      </div>
    );
  }
}
