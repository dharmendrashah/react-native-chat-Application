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

import {ActionSheet, Root} from 'native-base';


import Logo from './../../images/logo.png';



import { Actions } from 'react-native-router-flux'

//import Toast from 'react-native-simple-toast';

const {width: WIDTH} = Dimensions.get('window');

import Register from './register'

import Users from './users';

import auth from '@react-native-firebase/auth';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  

  _handlePress() {
           if(this.state.email === ''){
         // Alert.alert('Email feild is empty')
         ToastAndroid.show('Email feild is empty.',ToastAndroid.LONG);
         var userEmail = '';
      }else if(this.state.email !== ''){
          console.log('Email : '+ this.state.email)
          let emailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          if(emailValidate.test(this.state.email) === false){
              //Alert.alert('Email is invalid')
              ToastAndroid.show('Email is invalid.',ToastAndroid.LONG);
              console.log('email is not correct')
             var userEmail = '';
          }else(
              userEmail = this.state.email

              //validate the user email

          )
          
      }
            
            if (this.state.password === '') {
              //Alert.alert('Password feild is empty !');
              ToastAndroid.show('Password feild is empty !',ToastAndroid.LONG);
            } else if (this.state.password !== '') {
              var userPassword = this.state.password;
              console.log('Password : ' + this.state.password);
              
            }


            //move to the Friends
            if(userEmail !== '' && this.state.password !== ''){
              const correctEmail = userEmail;
              const correctPassword = this.state.password;

              //with firebase login
                auth().signInWithEmailAndPassword(correctEmail, correctPassword).then(() => {
                  console.log('User found and Logging in')
                  Actions.Users();
                }).catch(error => {
                  if(error.code === 'auth/user-not-found'){
                    console.log('User not found please try with correct one');
                    ToastAndroid.show('User not found please try again', ToastAndroid.LONG)
                  }
                })
            }
         
     
 
  }
  render() {
     
     //console.log(this.props.navigation)
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
            <Button
              iconRight
              style={styles.btnLogin}
              icon={<Icon name="arrow-right" size={25} color="#fff" />}
              title="Login        "
              onPress={() => this._handlePress()}
            />

            <Text style={{color: 'black', textAlign: 'center'}}>
              Don't have an account &nbsp;
               <Text
                style={styles.textLink}
                onPress={() =>
                  Actions.Register()
                }>
                Create New.
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
    marginLeft: 15,
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
