import React, {Component,useState, useEffect} from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  ToastAndroid,
  Image,
  Linking,
  Alert,
  ActivityIndicator
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome';
//asyncStorage
import AsyncStorage from '@react-native-community/async-storage';

import {Input, SocialIcon, Button} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Actions } from 'react-native-router-flux'
import {Toast, ActionSheet, Root} from 'native-base';
import Logo from './../../images/logo.png';
const {width: WIDTH} = Dimensions.get('window');

//login
import Login from './login';
import Users from './users';

import auth from '@react-native-firebase/auth';

//firestore
import firestore from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';

//moment for time and date
import moment from 'moment';
export default class Register extends Component {
                 UNSAFE_componentWillMount(props) {
                   auth().onAuthStateChanged((user) => {
                     if (user) {
                       Actions.Users();
                     }
                   });
                   this.hideLoader();
                   this.showButton();
                 }
                 showLoader = () => {
                   this.setState({showLoader: true});
                 };
                 hideLoader = () => {
                   this.setState({showLoader: false});
                 };
                 showButton = () => {
                   this.setState({showButton: false});
                 };
                 hideButton = () => {
                   this.setState({showButton: true});
                 };

                 //button disable

                 constructor(props) {
                   super(props);
                   this.state = {
                     name: '',
                     email: '',
                     phone:'',
                     password: '',
                     confirmPassword: ''

                     
                   };
                 }
                 _handlePress() {
                   this.showLoader();
                    this.hideButton();

                    //phone number
                     if (this.state.phone === '') {
                     ToastAndroid.show(
                       'phone feild is empty.',
                       ToastAndroid.SHORT,
                     );
                     var PhoneNumber = '';
                     this.hideLoader();
                     this.showButton();
                   } else if (this.state.phone !== '') {
                     
                     if (this.state.phone.length > 10) {
                       ToastAndroid.show(
                         'Phone number length is greater than 10.',
                         ToastAndroid.SHORT,
                       );
                       var PhoneNumber = '';
                       this.hideLoader();
                       this.showButton();
                     } else {
                       var PhoneNumber = this.state.phone;
                     }
                   }

                   if (this.state.name === '') {
                     //Alert.alert('Name feild is empty')
                     ToastAndroid.show(
                       'Name feild is empty.',
                       ToastAndroid.SHORT,
                     );
                     var userName = '';
                     this.hideLoader();
                     this.showButton();
                   } else if (this.state.name !== '') {
                     // console.log('name : '+ this.state.name)
                     var userName = this.state.name;
                   }

                   if (this.state.email === '') {
                     // Alert.alert('Email feild is empty')
                     ToastAndroid.show(
                       'Email feild is empty.',
                       ToastAndroid.SHORT,
                     );
                     var userEmail = '';
                     this.hideLoader();
                     this.showButton();
                   } else if (this.state.email !== '') {
                     //console.log('Email : '+ this.state.email)
                     let emailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                     if (emailValidate.test(this.state.email) === false) {
                       // Alert.alert('Email is invalid')
                       ToastAndroid.show(
                         'Email is invalid.',
                         ToastAndroid.SHORT,
                       );
                       console.log('email is not correct');
                       var userEmail = '';
                       this.hideLoader();
                       this.showButton();
                     } else userEmail = this.state.email;
                   }

                   if (this.state.password === '') {
                     //  Alert.alert('Password feild is empty')
                     ToastAndroid.show(
                       'Password feild is empty.',
                       ToastAndroid.SHORT,
                     );
                     var userPassword = '';
                     this.hideLoader();
                     this.showButton();
                   } else if (this.state.password !== '') {
                     // console.log('Password : '+ this.state.password)
                     var userPassword = this.state.password;
                   }

                   if (this.state.confirmPassword === '') {
                     // Alert.alert('Confirm Password feild is empty')
                     ToastAndroid.show(
                       'Confirm Password feild is empty.',
                       ToastAndroid.SHORT,
                     );
                     var userConfirmPassword = '';
                     this.hideLoader();
                     this.showButton();
                   } else if (this.state.confirmPassword !== '') {
                     // console.log('Confirm password : '+this.state.confirmPassword)
                     var userConfirmPassword = this.state.confirmPassword;
                   }

                   if (
                     userName !== '' &&
                     PhoneNumber !== '' &&
                     userEmail !== '' &&
                     userPassword !== '' &&
                     userConfirmPassword !== ''
                   ) {
                     var confName = userName; //this is final
                     var confEmail = userEmail; //this is final
                     var confPhone = PhoneNumber; //this is final

                     if (userPassword === userConfirmPassword) {
                       if (userPassword.length >= 8) {
                         var correctPassword = userPassword; //this is final
                       } else {
                         ToastAndroid.show(
                           'Password length is less than 8 char please make it atleast 8 char long',
                           ToastAndroid.SHORT,
                         );
                         var correctPassword = '';
                         this.hideLoader();
                         this.showButton();
                       }
                     } else {
                       ToastAndroid.show(
                         'Password do not match',
                         ToastAndroid.SHORT,
                       );
                       var correctPassword = '';
                       this.hideLoader();
                       this.showButton();
                     }

                     //make the wish
                     if (
                       confName !== '' &&
                       confPhone !== '' &&
                       confEmail !== '' &&
                       correctPassword !== ''
                     ) {
                       auth()
                         .createUserWithEmailAndPassword(
                           confEmail,
                           correctPassword,
                         )
                         .then(() => {
                           firestore()
                             .collection('Users')
                             .add({
                               name: confName,
                               email: confEmail,
                               phoneNumber: confPhone,
                               password: correctPassword,
                               profilePic:
                                 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
                               gender: 'Unknown',
                               isOnline: true,
                               status: 'chilling',
                               description: 'not available',
                               lastSeen: moment().format(
                                 'MMMM Do YYYY, h:mm:ss a',
                               ),
                               createdOn: moment()
                                 .utcOffset('+05:30')
                                 .format('MMMM Do YYYY, h:mm:ss a'),
                               updatedOn: moment()
                                 .utcOffset('+05:30')
                                 .format('MMMM Do YYYY, h:mm:ss a')
                             })
                             .then(() => {
                               database()
                                 .ref('Users')
                                 .set({
                                   name: confName,
                                   email: confEmail,
                                   phoneNumber: confPhone,
                                   password: correctPassword,
                                   profilePic:
                                     'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
                                   gender: 'Unknown',
                                   isOnline: true,
                                   status: 'chilling',
                                   description: 'not available',
                                   lastSeen: moment().format(
                                     'MMMM Do YYYY, h:mm:ss a',
                                   ),
                                   createdOn: moment()
                                     .utcOffset('+05:30')
                                     .format('MMMM Do YYYY, h:mm:ss a'),
                                   updatedOn: moment()
                                     .utcOffset('+05:30')
                                     .format('MMMM Do YYYY, h:mm:ss a'),
                                 })
                                 .then(() => {
                                   console.log('Data set.');
                                   Actions.Users();
                                   ToastAndroid.show(
                                     'welcome',
                                     ToastAndroid.LONG,
                                   );
                                 })
                                 .catch((e) => {
                                   this.hideLoader();
                                   this.showButton();
                                   ToastAndroid.show(
                                     'Oops, Something else happen please try again',
                                     ToastAndroid.LONG,
                                   );
                                   console.log(e);
                                 });
                             })
                             .catch((e) => {
                               this.hideLoader();
                               this.showButton();
                               ToastAndroid.show(
                                 'Oops, Something else happen please try again',
                                 ToastAndroid.LONG,
                               );
                               console.log(e);
                             });
                         })
                         .catch((error) => {
                           this.hideLoader();
                           this.showButton();
                           if (error.code === 'auth/email-already-in-use') {
                             ToastAndroid.show(
                               'auth/email-already-in-use',
                               ToastAndroid.LONG,
                             );
                           }

                           if (error.code === 'auth/invalid-email') {
                             ToastAndroid.show(
                               'auth/invalid-email',
                               ToastAndroid.LONG,
                             );
                           }

                           ToastAndroid.show(
                             'Oops, Something else happen please try again',
                             ToastAndroid.LONG,
                           );
                           console.log(error);
                         });
                     }
                   }
                 }

                 render() {
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
                             onChangeText={(text) =>
                               this.setState({name: text})
                             }
                           />
                           <TextInput
                             style={styles.input}
                             placeholder={'Email'}
                             placeholderTextColor={'rgba(255,255,255,0.7)'}
                             underlineColorAndroid="transparent"
                             onChangeText={(text) =>
                               this.setState({email: text})
                             }
                           />
                           <TextInput
                             style={styles.input}
                             placeholder={'Phone Number'}
                             keyboardType={'numeric'}
                             maxLength={10}
                             placeholderTextColor={'rgba(255,255,255,0.7)'}
                             underlineColorAndroid="transparent"
                             onChangeText={(text) =>
                               this.setState({phone: text})
                             }
                           />
                           <TextInput
                             style={styles.inputPassword}
                             placeholder={'Password'}
                             secureTextEntry={true}
                             placeholderTextColor={'rgba(255,255,255,0.7)'}
                             underlineColorAndroid="transparent"
                             onChangeText={(text) =>
                               this.setState({password: text})
                             }
                           />
                           <TextInput
                             style={styles.inputPassword}
                             placeholder={'Confirm Paassword'}
                             secureTextEntry={true}
                             placeholderTextColor={'rgba(255,255,255,0.7)'}
                             underlineColorAndroid="transparent"
                             onChangeText={(text) =>
                               this.setState({confirmPassword: text})
                             }
                           />
                           <Button
                             iconRight
                             style={styles.btnLogin}
                             icon={
                               <Icon
                                 name="arrow-right"
                                 size={25}
                                 color="#fff"
                               />
                             }
                             title="Register        "
                             disabled={this.state.showButton}
                             onPress={() => this._handlePress()}
                           />
                           <ActivityIndicator
                             animating={this.state.showLoader}
                             size="small"
                             color="#000000"
                             hidesWhenStopped={true}
                           />
                           <Text style={{color: 'black', textAlign: 'center'}}>
                             Already have an account &nbsp;
                             <Text
                               style={styles.textLink}
                               onPress={() => Actions.Login()}>
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
