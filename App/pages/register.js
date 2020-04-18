import React, {Component} from 'react';
import {
  TextInput,
  StyleSheet,
  AsyncStorage,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  ToastAndroid,
  Image,
  Linking,
  Alert
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Input, SocialIcon, Button} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {Toast, ActionSheet, Root} from 'native-base';


import Logo from './../../images/logo.png';


//navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const {width: WIDTH} = Dimensions.get('window');

//login
import Login from './login';
import Users from './users';

export default class Register extends Component {
  
  constructor(props){
      super(props);
      this.state = {
          name : '',
          email: '',
          password: '',
          confirmPassword: ''
      }
  }

  _handlePress(){
      if(this.state.name === ''){
           Alert.alert('Name feild is empty')
           userName = '';
      }else if(this.state.name !== ''){
         // console.log('name : '+ this.state.name)
          userName = this.state.name
      }


      if(this.state.email === ''){
          Alert.alert('Email feild is empty')
          userEmail = '';
      }else if(this.state.email !== ''){
          //console.log('Email : '+ this.state.email)
          let emailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          if(emailValidate.test(this.state.email) === false){
              Alert.alert('Email is invalid')
              console.log('email is not correct')
             var userEmail = '';
          }else(
              userEmail = this.state.email
          )
          
      }

      if(this.state.password === ''){
          Alert.alert('Password feild is empty')
          userPassword = '';
      }else if(this.state.password !== ''){
         // console.log('Password : '+ this.state.password)
          userPassword = this.state.password
      }

      if(this.state.confirmPassword === ''){
          Alert.alert('Confirm Password feild is empty')
          userConfirmPassword = '';
      }else if(this.state.confirmPassword !== ''){
         // console.log('Confirm password : '+this.state.confirmPassword)
          userConfirmPassword = this.state.confirmPassword
      }

      if(userName !== '' && userEmail !== '' && userPassword !== '' && userConfirmPassword !== ''){
         // console.log('Name : '+userName + ' Email : '+userEmail+' Password : '+ userPassword+ ' Confirm Password : '+ userConfirmPassword)
          //adding new wrapper to the non empty variable
        var confName = userName; //this is final
        var confEmail = userEmail; //this is final
        if(userPassword !== userConfirmPassword){
            Alert.alert('Password do not match')
            var confPassword = '';
        }

        if(confPassword !== ''){
            var correctPassword = this.state.password; //this is final

              const { navigate } = this.props.navigation;
              navigate('Users', {
                    screen: 'Users',
                    params: { user: 'jane' },
                  });
            
              
            //here we have to send the user to the chat bar
            
        }
      }

      
  }
  
  render() {
     const { navigate } = this.props.navigation;
    return (
      <Root>
        <View style={styles.container}>
          <View style={styles.logoConatiner}>
            <Image source={Logo} style={styles.logo} />
            <Text style={styles.logoText}>Instant Chat</Text>
          </View>
          <View style={styles.inputContainer}>
           <TextInput
              style={styles.input}
              placeholder={'FullName'}
              placeholderTextColor={'rgba(255,255,255,0.7)'}
              underlineColorAndroid="transparent"
              onChangeText={(text) => this.setState({name: text})}
            />
            <TextInput
              style={styles.input}
              placeholder={'Email'}
              placeholderTextColor={'rgba(255,255,255,0.7)'}
              underlineColorAndroid="transparent"
              onChangeText={(text) => this.setState({email: text})}
            />
            <TextInput
              style={styles.inputPassword}
              placeholder={'Password'}
              secureTextEntry={true}
              placeholderTextColor={'rgba(255,255,255,0.7)'}
              underlineColorAndroid="transparent"
              onChangeText={(text) => this.setState({password: text})}
            />
             <TextInput
              style={styles.inputPassword}
              placeholder={'Confirm Paassword'}
              secureTextEntry={true}
              placeholderTextColor={'rgba(255,255,255,0.7)'}
              underlineColorAndroid="transparent"
              onChangeText={(text) => this.setState({confirmPassword: text})}
            />
            <Button
              iconRight
              style={styles.btnLogin}
              icon={<Icon name="arrow-right" size={25} color="#fff" />}
              title="Register        "
              onPress={() => this._handlePress()}
            />
            <Text style={{color: 'black', textAlign: 'center'}}>
              Already have an account &nbsp;
               <Text
                style={styles.textLink}
                onPress={
                  () => navigate('Home')
                }>
                Login.
              </Text> 
            </Text>
          </View>
        </View>
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  logoConatiner: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoText: {
    color: 'blue',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
    marginLeft: -15,
    marginRight: -15,
    opacity: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    marginTop: 10,
  },
  inputIcon: {
    position: 'absolute',
    top: 10,
    left: 37,
    color: '#d2d2d2',
  },

  input: {
    width: WIDTH - 10,
    height: 45,
    borderRadius: 5,
    marginTop: '2%',
    fontSize: 20,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255,255,255,0.7)',
    marginHorizontal: 25,
  },
  inputPassword: {
    width: WIDTH - 10,
    height: 45,
    borderRadius: 5,
    fontSize: 20,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255,255,255,0.7)',
    marginTop: '2%',
    marginBottom: '2%',
    marginHorizontal: 25,
  },
  submitLogin: {
    marginTop: '2%',
    width: WIDTH - 10,
  },
  btnLogin: {
    height: hp('10%'),
    width: wp('50%'),
    borderRadius: 5,
    justifyContent: 'center',
    fontSize: 20,
    paddingLeft: 45,
    marginHorizontal: 25,
    marginLeft: '2%',
  },
  text: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16,
    textAlign: 'center',
  },
  textLink: {
    color: 'blue',
    textAlign: 'center',
  },
});
