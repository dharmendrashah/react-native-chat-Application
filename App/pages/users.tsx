import * as React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, StatusBar,BackHandler,Alert } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { Actions } from 'react-native-router-flux'

//imort chat
import Chat from './chat';
//asyncStorage
import AsyncStorage from '@react-native-community/async-storage';

//rect-natve-elemnts

import {Header,Icon} from 'react-native-elements';

//importing the headers
//importinng the importnat files

import Private from './../users/private';
import Group from './../users/group';
import Search from './../users/search';

const FirstRoute = () => (<Private/>);
const SecondRoute = () => (<Group/>);
const ThirdRoute = () => (<Search/>);


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

//searchBar
import Searchbar from './search';


 

import auth from '@react-native-firebase/auth';
export default class Users extends React.Component {
                 backAction = () => {
                   Alert.alert(
                     'Hold on!',
                     'Are you sure you want to go back?',
                     [
                       {
                         text: 'Cancel',
                         onPress: () => null,
                         style: 'cancel',
                       },
                       {text: 'YES', onPress: () => BackHandler.exitApp()},
                     ],
                   );
                   return true;
                 };

                 componentDidMount() {
                   BackHandler.addEventListener(
                     'hardwareBackPress',
                     this.backAction,
                   );
                   
                   
                 }
                 UNSAFE_componentWillMount(props) {
                   BackHandler.removeEventListener(
                     'hardwareBackPress',
                     this.backAction,
                   );
                   auth().onAuthStateChanged((user) => {
                     if (!user) {
                       Actions.Login();
                     }
                     console.log(user)
                   });
                   
                    
                 }

                 state = {
                   index: 2,
                   routes: [
                     {key: 'first', title: 'Private'},
                     {key: 'second', title: 'Group'},
                     {key: 'third', title: 'Search'},
                   ],
                 };

                 _handleIndexChange = (index) => this.setState({index});

                 _renderLazyPlaceholder = ({route}) => (
                   <LazyPlaceholder route={route} />
                 );
                

                 render() {
                   return (
                     <>
                       <Header
                         placement="left"
                         leftComponent={{icon: 'chat', color: '#fff'}}
                         centerComponent={
                           <Text style={styles.title}> Instant chat </Text>
                         }
                         rightComponent={
                           <Icon
                             name="settings"
                             color="white"
                             onPress={() => Actions.Profile()}
                           />
                         }
                       />
                       <TabView
                         lazy
                         navigationState={this.state}
                         renderScene={SceneMap({
                           first: FirstRoute,
                           second: SecondRoute,
                           third: ThirdRoute,
                         })}
                         renderLazyPlaceholder={this._renderLazyPlaceholder}
                         onIndexChange={this._handleIndexChange}
                         initialLayout={{width: Dimensions.get('window').width}}
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
  title:{
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30
  }
});
