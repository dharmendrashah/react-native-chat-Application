import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ToastAndroid
} from 'react-native';
import Logo from './../../images/profileImage.png';
import { Actions } from 'react-native-router-flux'
import auth from '@react-native-firebase/auth';



export default class UserProfile extends React.Component {
                 UNSAFE_componentWillMount(props) {
                   auth().onAuthStateChanged((user) => {
                     if (!user) {
                       Actions.Login();
                     }
                   });
                 }
                 _;
                 render() {
                   //logout the user
                   const Logout = () => {
                     auth()
                       .signOut()
                       .then(() => Actions.Loading());
                   };
                   return (
                     <>
                       <View style={styles.container}>
                         <View style={styles.header}></View>
                         <Image style={styles.avatar} source={Logo} />
                         <View style={styles.body}>
                           <View style={styles.bodyContent}>
                             <Text style={styles.name}>John Doe</Text>
                             <Text style={styles.info}>
                               UX Designer / Mobile developer
                             </Text>
                             <Text style={styles.description}>
                               Lorem ipsum dolor sit amet, saepe sapientem eu
                               nam. Qui ne assum electram expetendis, omittam
                               deseruisse consequuntur ius an,
                             </Text>

                             <TouchableOpacity style={styles.buttonContainer}>
                               <Text>Opcion 1</Text>
                             </TouchableOpacity>
                             <TouchableOpacity style={styles.buttonContainer}
                             onPress={
                               ()=> Actions.Users()
                             }
                             >
                               <Text>Go Back</Text>
                             </TouchableOpacity>
                             <TouchableOpacity
                               style={styles.buttonContainer}
                               onPress={() => Logout()}>
                               <Text>Logout</Text>
                             </TouchableOpacity>
                           </View>
                         </View>
                       </View>
                     </>
                   );
                 }
               }

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});