import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';

export default class Detail extends React.Component {
  static navigationOptions = ({ navigation }) => {
    console.log(navigation);
    return {
      title: 'Detail',
      headerRight: <Text onPress={() => {
        navigation.goBack()
      }}>返回</Text>
    }
  };

  render() {
    const { params } = this.props.navigation.state;
    return (
      <Text>{params.text}</Text>
    );
  }
}
