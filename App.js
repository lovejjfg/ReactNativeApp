import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  DrawerLayoutAndroid,
  ToolbarAndroid
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
  	const { navigate } = this.props.navigation;
    var navigationView = (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
    </View>
  );
        return (
          <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}>
                  <ToolbarAndroid
                     actions={toolbarActions}
                     style={styles.toolbar}
                     subtitle="副标题"
                     onActionSelected={onActionSelected}
                     title="主标题"
                     />
                    <View style={styles.container}>
                      <Text style={styles.welcome}
                      >
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
                       onPress={() => navigate('Chat')}
                       title="Chat with Lucy"
                       color="#841584"
                       accessibilityLabel="Learn more about this purple button"
                     />
                    </View>

           </DrawerLayoutAndroid>

    );
  }
}


var toolbarActions =[
  {title: 'Settings', icon:require('./ic_launcher.png'), show: 'always'}
];
function onActionSelected(position) {
  if (position === 0) { // index of 'Settings'

  }
}

function onPressLearnMore(){
Alert.alert('on click!!')
ToastAndroidTest.show('Awesome', ToastAndroidTest.SHORT);

}

class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
  };
  render() {
    return (
      <View>
        <Text>Chat with Lucy</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#e9eaed',
    height: 56,
  },
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

const ReactNativeApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});

AppRegistry.registerComponent('ReactNativeApp', () => ReactNativeApp);