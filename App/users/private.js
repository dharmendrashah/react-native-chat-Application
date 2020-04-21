import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Overlay
}from 'react-native'
import {ListItem,Image} from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import LinearGradient from 'react-native-linear-gradient'; // Only if no expo



import { useRoute  } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import { Actions } from 'react-native-router-flux'
//include chat
//move to the chat with params
//users
const list = [
  {
    user_id: 'dfgshfgsdgfhshfsf',
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
  },
  {
    user_id: 'fadsadasdsadasdasdadsada',
    name: 'Chris Jackson',
    avatar_url:'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
];

//Overlay
export default class Private extends React.Component{
    render(){
        return (
          <>
            <View style={{backgroundColor: 'rgb(236, 240, 233)'}}>
              {list.map((l, i) => (
                <ListItem
                  Component={TouchableScale}
                  friction={60}
                  tension={500}
                  onPress={() => Actions.Chat({id:'fdfdfdfd'})} //here we will move to the chat
                  activeScale={0.95}
                  key={i}
                  leftAvatar={{source: {uri: l.avatar_url}}}
                  title={l.name}
                  titleStyle={{color: 'black', fontWeight: 'bold'}}
                  subtitle={l.subtitle}
                  subtitleStyle={{color: 'black'}}
                  bottomDivider
                  chevron={{color: 'black'}}
                />
              ))}
            </View>
          </>
        );
    }
}


const styles = StyleSheet.create({
  scene: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

