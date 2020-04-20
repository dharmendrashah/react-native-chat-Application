import * as React from 'react';
import {
    View,
    Text,
    StyleSheet
}from 'react-native'
import { SearchBar } from 'react-native-elements';

export default class Search extends React.Component{
     state = {
    search: '',
  };
  updateSearch = search => {
    this.setState({ search });
    console.log(search) //open the console to see the magic
  };

    render(){
         const { search } = this.state;
        return(
            <>
            <SearchBar
            style={{ borderRadius: 50, padding:'offset' }}
            theme={{ roundness: 100, colors: { primary:'green', underlineColor:'transparent', } }}
            underlineColorAndroid='transparent'
            placeholder="Search friends"
            onChangeText={this.updateSearch}
            value={search}
            />
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

