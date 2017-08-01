import React, { PropTypes } from 'react'

export default class Loading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.text
    };
  }

  componentDidMount() {
    var stopper = this.props.text + "...";
    this.interval = window.setInterval(function () {
      if (this.state.text === stopper) {
        this.setState({
          text: this.props.text
        });
      } else {
        this.setState((prevState, props) => {
          return {
            text: prevState.text + "."
          };
        });
      }
    }.bind(this), this.props.speed);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render () {
    return (
      <p style={ styles.content }>
        { this.state.text }
      </p>
    );
  }
}

const styles = {
  content: {
    textAlign: "center",
    fontSize: "35px"
  }
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired
}

Loading.defaultProps = {
  text: "Loading",
  speed: 300
}
