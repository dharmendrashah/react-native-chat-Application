import * as React from 'react';
import {
    View,
    Text,
    StyleSheet
}from 'react-native'

export default class Search extends React.Component{
    render(){
        return(
            <>
            <View style={[styles.scene, { backgroundColor: '#fafafa' }]}>
                <Text>Search</Text>
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

