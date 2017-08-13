import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default class NavRight extends React.Component {
  render() {
    return (
      <View style={{flexDirection: 'row', height: 44}}>
        <Text style={{backgroundColor: 'rgb(221, 94, 40)', marginRight: 5}}>Right1</Text>
        <Text style={{backgroundColor: 'rgb(221, 94, 40)', marginRight: 5}}>Right2</Text>
      </View>
    );
  }
}
