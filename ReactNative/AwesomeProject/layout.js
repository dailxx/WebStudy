import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Layout extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.v1}></View>
        <View style={styles.v2}></View>
        <View style={styles.v3}></View>
        <View style={styles.v4}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  v1: {
    backgroundColor: 'red',
    width: 160,
    height: 160
  },
  v2: {
    backgroundColor: 'green',
    width: 140,
    height: 140,
    marginTop: 100,
  },
  v3: {
    position: 'absolute',
    backgroundColor: 'blue',
    width: 120,
    height: 120
  },
  v4: {
    flex: 1,
    backgroundColor: 'orange',
    width: 100,
    height: 100
  }
});
