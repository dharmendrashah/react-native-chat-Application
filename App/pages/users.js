import * as React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

//rect-natve-elemnts

import {Header} from 'react-native-elements';

//importing the headers

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#fafafa' }]} />
);


const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#fafafa' }]} />
);

// This is our placeholder component for the tabs
// This will be rendered when a tab isn't loaded yet
// You could also customize it to render different content depending on the route
const LazyPlaceholder = ({ route }) => (
  <View style={styles.scene}>
    <Text>Loading {route.title}…</Text>
  </View>
);

//importing the instant chat logo

import Logo from '../../images/logo.png';


//importing the header
import AllHeader from '../tinyComponent/header';

export default class Users extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Private message' },
      { key: 'second', title: 'Group message' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderLazyPlaceholder = ({ route }) => <LazyPlaceholder route={route} />;

  render() {
    return (
      <>
       <Header
                placement="left"
                leftComponent={{ icon: 'chat', color: '#fff' }}
                centerComponent={
                  <Text>
                   Instant chat
                  </Text>
                }
                rightComponent={{ icon: 'search', color: '#fff' }}
            />
    <TabView
        lazy
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
          
        })}
        renderLazyPlaceholder={this._renderLazyPlaceholder}
        onIndexChange={this._handleIndexChange}
        initialLayout={{ width: Dimensions.get('window').width }}
        
       
      />
     </>
      
       
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: '0'
  },
  scene: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
