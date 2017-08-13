import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import List from './list';
import Detail from './detail';
import Layout from './layout';
import Animation from './animation';
import MyButton from './MyButton';
import Gesture from './gesture';

class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerBackTitle: null, // 返回按钮的名字
    headerTintColor: 'orange',
    headerTitleStyle: {fontSize: 30, backgroundColor: 'red'}
  };

  onPressButton(e) {
    this.props.navigation.navigate('List');
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={this.onPressButton.bind(this)}
          activeOpacity={0.7}>
          <Text style={styles.title}>跳转到列表</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: 100,
    height: 45,
    borderRadius: 5,
    backgroundColor: 'rgb(70, 168, 214)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

const SimpleApp = StackNavigator({
  Home: {screen: Home},
  List: {screen: List},
  Detail: {screen: Detail},
  Layout: {screen: Layout},
  Animation: {screen: Animation},
  Gesture: {screen: Gesture}
}, {
  // initialRouteName: 'Home',
  // initialRouteName: 'Layout',
  // initialRouteName: 'Animation',
  initialRouteName: 'Gesture',
  headerMode: 'screen',
});

export default SimpleApp;
