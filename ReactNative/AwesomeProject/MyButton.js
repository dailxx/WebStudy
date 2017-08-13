import React, { PropTypes } from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default class MyButton extends React.Component {
  render () {
    const props = this.props;
    console.log(props);
    return (
      <TouchableOpacity>
        <Text
          {...props}>
          {props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}
