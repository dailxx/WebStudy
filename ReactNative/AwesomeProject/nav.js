import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, } from 'react-native';

export default class List extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <TouchableOpacity activeOpacity={0.7}>
            <Image style={styles.nav} source={require('./images/nav_back.png')}/>
          </TouchableOpacity>
          <Text style={styles.title} numberOfLines={1}>标题标题标题标题</Text>
        </View>
        <View style={styles.bottom}></View>
      </View>
    );
  }
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    paddingTop: 20,
  },
  top: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center'
  },
  bottom: {
    backgroundColor: 'rgb(178, 178, 178)',
    bottom: 0,
    height: StyleSheet.hairlineWidth
  },
  nav: {
    width: 44,
    height: 44
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 6,
    marginRight: 50
  }
});
