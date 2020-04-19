import * as React from 'react';
import {
    View,
    Text,
    StyleSheet
}from 'react-native'




export default class Group extends React.Component{
    render(){
        return(
            <>
            <View style={{ backgroundColor: 'rgb(252, 242, 243)' }}>
               <Text>Group</Text>
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

