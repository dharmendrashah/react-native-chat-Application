import * as React from 'react';
import {
    View,
    Text,
    StyleSheet
}from 'react-native'

import {ListItem,Image, Icon} from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import LinearGradient from 'react-native-linear-gradient'; // Only if no expo
import { Actions } from 'react-native-router-flux'


const list = [
  {
    groupId: 'dfgshfgsdgfhshfsf',
    groupName: 'Family group',
    groupAvatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    groupId: 'dfgshfgsdgfhshfsf',
    groupName: 'Family group',
    groupAvatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
];

export default class Group extends React.Component{
    render(){
        return(
            <>
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
                  leftAvatar={<Icon name='group' />}
                  title={l.groupName}
                  titleStyle={{color: 'black', fontWeight: 'bold'}}
                  subtitle={l.subtitle}
                  subtitleStyle={{color: 'black'}}
                  bottomDivider
                  chevron={{color: 'black'}}
                />
              ))}
            </View>
          </>
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

