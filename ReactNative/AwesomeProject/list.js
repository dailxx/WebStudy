import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Detail from './detail';
import NavRight from './NavRight';

export default class List extends React.Component {

  static navigationOptions = ({ navigation}) => ({
      title: 'List',
      headerRight: <NavRight/>,
  });

  onPressButton(e) {
    this.props.navigation.navigate('Detail', {text: 'Hello Detail!'});
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={this.onPressButton.bind(this)}
          activeOpacity={0.7}>
          <Text style={styles.title}>跳转到详情</Text>
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
