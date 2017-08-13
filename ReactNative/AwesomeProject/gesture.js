import React, { PropTypes } from 'react';
import { StyleSheet, View, PanResponder } from 'react-native';

export default class Gesture extends React.Component {
  static navigationOptions = {
    title: '手势'
  };

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this.handleStartShouldSetPanResponder.bind(this),
      onMoveShouldSetPanResponder: this.handleMoveShouldSetPanResponder.bind(this).bind(this),
      onPanResponderGrant: this.handlePanResponderGrant.bind(this),
      onPanResponderMove: this.handlePanResponderMove.bind(this),
      onPanResponderRelease: this.handlePanResponderEnd.bind(this),
      onPanResponderTerminate: this.handlePanResponderEnd.bind(this),
    });

    this.previousLeft = 20;
    this.previousTop = 84;
    this.circleStyles = {
      style: {
        left: this.previousLeft,
        top: this.previousTop,
        backgroundColor: 'green'
      }
    }
  }

  componentDidMount() {
    this.updateNativeStyles();
  }

  render() {
   return (
     <View style={{flex: 1}}>
       <View
         ref={circle => this.circle = circle}
         style={styles.circle}
         {...this.panResponder.panHandlers}>
       </View>
     </View>
   );
  }

  highlight() {
    this.circleStyles.style.backgroundColor = 'blue';
    this.updateNativeStyles();
  }

  unHighlight() {
    this.circleStyles.style.backgroundColor = 'green';
    this.updateNativeStyles();
  }

  updateNativeStyles() {
    this.circle && this.circle.setNativeProps(this.circleStyles);
  }

  handleStartShouldSetPanResponder(evt, gestureState) {
    return true;
  }

  handleMoveShouldSetPanResponder(evt, gestureState) {
    return true;
  }

  handlePanResponderGrant(evt, gestureState) {
    this.highlight();
  }

  handlePanResponderMove(evt, gestureState) {
    this.circleStyles.style.left = this.previousLeft + gestureState.dx;
    this.circleStyles.style.top = this.previousTop + gestureState.dy;
    this.updateNativeStyles();
  }

  handlePanResponderEnd(evt, gestureState) {
    this.unHighlight();
    this.previousLeft += gestureState.dx;
    this.previousTop += gestureState.dy;
  }
}

const styles = StyleSheet.create({
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    position: 'absolute',
    left: 0,
    top: 0
  }
});
