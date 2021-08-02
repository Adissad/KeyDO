import React, {useState} from 'react';
import { View, StyleSheet, Text, Dimensions} from "react-native";
import { FontAwesome, Ionicons, Fontisto } from "@expo/vector-icons";
import { Input, Button } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
// import { Redirect } from 'react-router';

import {connect} from 'react-redux';
import HomeScreen from './HomeScreen';


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;



function ConnexionScreen(props) {
  const [signUpUsername, setSignUpUsername] = useState('')
  const [signUpEmail, setSignUpEmail] = useState('')
  const [signUpPassword, setSignUpPassword] = useState('')
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [userCity, setUserCity] = useState('')

  const [signInEmail, setSignInEmail] = useState('')
  const [signInPassword, setSignInPassword] = useState('')

  const [userExists, setUserExists] = useState(false)

  const [listErrorsSignin, setErrorsSignin] = useState([])
  const [listErrorsSignup, setErrorsSignup] = useState([])

  var handleSubmitSignup = async () => {
    
    const data = await fetch('http://172.17.1.106:3000/users/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `name=${signUpUsername}&email=${signUpEmail}&password=${signUpPassword}&age=${selectedAge}&gender=${selectedGender}&city=${userCity}`
    })

    const body = await data.json()

  if(body.result == true){
    props.addToken(body.token)
    setUserExists(true)}
    props.navigation.navigate('Profile')
  } 
  // }  else {
  //   setErrorsSignin(body.error)
  // }


// if(userExists){
//   return <Redirect to='Home' />
// }


  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#FF8ABD", "#EF7365"]}
        start={{
          x: 0,
          y: 1,
        }}
        end={{
          x: 0.25,
          y: 0.25,
        }}
        style={styles.box}
      >

        <View style={{marginTop:1/8*windowHeight, flexDirection:"row", justifyContent: "space-around", alignItems:"center", width:"100%", height:"auto"}}>
            <Text style={{color:"#FFFFFF", fontSize:20}}>Create an account</Text>
        </View>

        <View style={{marginTop:1/9*windowHeight,flexDirection:"row", justifyContent: "space-around", alignItems:"center", height:"auto"}} >
          <FontAwesome name="spotify" size={60} color="#1DB954" 
          onPress={() => {props.navigation.navigate('Spotify')}} /> 
          <Fontisto name="applemusic" size={50} color="#FC3C44"
          onPress={() => {props.navigation.navigate('Apple')}} />
        </View>

        <View style={{marginTop:1/8*windowHeight,flexDirection:"row", justifyContent: "space-around", alignItems:"center"}}>
            <View style={styles.separator}></View>
        <Text> OR </Text>
            <View style={styles.separator}></View>
        </View>


        <View style={{marginTop:1/10*windowHeight, justifyContent:"center" ,flexDirection:"column" }} >
        <Input
          onChangeText={(value) => setSignUpUsername(value)}
          value={signUpUsername}
          style={{ paddingLeft: 20 }}
          placeholder="Name"
          placeholderTextColor="white"
          color="white"
        />

        <Input
          onChangeText={(value) => setSignUpEmail(value)}
          value={signUpEmail}
          style={{ paddingLeft: 20 }}
          placeholder="Email"
          placeholderTextColor="white"
          color="white"
        />

        <Input
          onChangeText={(value) => setSignUpPassword(value)}
          value={signUpPassword}
          style={{ paddingLeft: 20 }}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="white"
          color="white"
        />
        </View>

        <View style={{marginTop:1/35*windowHeight,flexDirection:"row", justifyContent: "space-around", alignItems:"center"}}>
        <Button onPress={() => {handleSubmitSignup ()}} buttonStyle={{backgroundColor:"#CF779E"}} title="Connexion" />
        </View>

      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    letterSpacing: 0,
    lineHeight: 1.2,
    justifyContent: "center",

    // fontFamily: ,
  },

  box: {
    flex:1,
    justifyContent: "flex-start",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },

  separator: {
      height:1, 
      width:1/5*(Dimensions.get("window").width),
      backgroundColor: "black",
  }
});

function mapStateToProps(state) {
  // console.log('hi', state);
  return { addToken : state.userToken }
  }

function mapDispatchToProps(dispatch) {
  return {
    addToken: function(token) {
      dispatch( {type: 'addToken',
            addToken: token
                              })
    }
  }
 }

 export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnexionScreen);
