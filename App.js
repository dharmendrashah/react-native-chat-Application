/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import * as React from 'react';

//component
import { Router, Scene } from 'react-native-router-flux'
  //Index
    import Loading from './App/tinyComponent/loading';
    import Login from './App/pages/login.js';
    import Register from './App/pages/register.js';
    import Users from './App/pages/users';
    import Searchbar from './App/pages/search';
    import Chat from './App/pages/chat';
    import Profile from './App/pages/profile';
//all areound header
    //some variables
 

const App: () => React$Node = () => {
  return (
    <>
      <Router>
        <Scene key="root">
            <Scene key="Loading" component={Loading} title="Loading" initial = {true} hideNavBar={true}/>
            <Scene key ="Login" component= {Login} title = "Login" hideNavBar={true} />
            <Scene key ="Register" component= {Register} title = "Register" hideNavBar={true}/>
            <Scene key ="Users" component= {Users} title = "Users" hideNavBar={true} />
            <Scene key ="Searchbar" component= {Searchbar} title = "Searchbar"/>
            <Scene key ="Chat" component= {Chat} title = "Chat" />
            <Scene key="Profile" component = {Profile} title = "Profile"/>
        </Scene>
      </Router>
    </>
  );
};

export default App;
