import React from 'react';
import { StyleSheet, View, Text, Animated, Button } from 'react-native';

export default class Animation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftValue: new Animated.Value(50)
    }
  }
  _onPressButton(e) {
    Animated.timing(
      this.state.leftValue,
      {
        toValue: 200,
        duration: 250,
      }
    ).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.circle, {marginLeft: this.state.leftValue}]}/>
        <Button
          style={styles.button}
          title='移动小球'
          onPress={this._onPressButton.bind(this)}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'red'
  },
  button: {
    width: 100,
    height: 45,
    backgroundColor: 'orange',
    borderRadius: 5
  }
});
