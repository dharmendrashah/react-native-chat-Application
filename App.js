/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//component

  //Index
  
    import Login from './App/pages/login.js';
    import Register from './App/pages/register.js';
    import Users from './App/pages/users';
    import Searchbar from './App/pages/search';
    import Chat from './App/pages/chat';

//all areound header
    //some variables
    const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <>
      {/* <Welcome/> */}
      {/* <Login/> */}
      <NavigationContainer>
        <Stack.Navigator initialRouterName={Login} screenOptions={{
          headerShown: false
         }}>
        
          <Stack.Screen
            name="Home"
            component={Login}
            options={{title: 'Login'}}
          />
         <Stack.Screen name="Register" component={Register} options={{title: 'Register'}}/>
         <Stack.Screen name="Users" component={Users} options={{title: 'Users'}}/>
         <Stack.Screen name="Searchbar" component={Searchbar} options={{title: 'Search'}}/>
         <Stack.Screen name="Chat" component={Chat} options={{title: 'Chat'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
