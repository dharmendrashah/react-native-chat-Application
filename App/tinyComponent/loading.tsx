import React, { useState, useEffect } from 'react';
import { View, Text, Navigator } from 'react-native';
import auth from '@react-native-firebase/auth';

import { Actions } from 'react-native-router-flux'

import Users from './../pages/users';
import Login from './../pages/login';
function Loading() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  if (initializing) return null;
  if (!user) {
    return(
      <Login/>
    );
  }
  return(
      <Users/>
  )
  
}

export default Loading;