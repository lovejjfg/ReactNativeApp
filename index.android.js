/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import ToastAndroidTest from './ToastAndroid';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  Alert,
  View
} from 'react-native';


export default class ReactNativeApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
       <Button
         onPress={onPressLearnMore}
         title="Learn More"
         color="#841584"
         accessibilityLabel="Learn more about this purple button"
       />
      </View>
    );
  }
}

function onPressLearnMore(){
Alert.alert('on click!!')
ToastAndroidTest.show('Awesome', ToastAndroidTest.SHORT);

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#00ff00',
    marginBottom: 5,
  },
});


AppRegistry.registerComponent('ReactNativeApp', () => ReactNativeApp);
