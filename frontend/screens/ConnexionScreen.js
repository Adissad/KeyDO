import React, {useState} from 'react';
import { View, StyleSheet, Text, Dimensions} from "react-native";
import { FontAwesome, Ionicons, Fontisto } from "@expo/vector-icons";
import { Input, Button } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;



export default function ConnexionScreen(props) {
  const [signUpUsername, setSignUpUsername] = useState('')
  const [signUpEmail, setSignUpEmail] = useState('')
  const [signUpPassword, setSignUpPassword] = useState('')

  const [signInEmail, setSignInEmail] = useState('')
  const [signInPassword, setSignInPassword] = useState('')

  const [userExists, setUserExists] = useState(false)

  const [listErrorsSignin, setErrorsSignin] = useState([])
  const [listErrorsSignup, setErrorsSignup] = useState([])

  var handleSubmitSignup = async () => {
    
    const data = await fetch('http://172.17.1.106:3000/users/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `name=${signUpUsername}&email=${signUpEmail}&password=${signUpPassword}`
    })

    const body = await data.json()

    if(body.result == true){
      props.addToken(body.token)
      setUserExists(true)
      
    } else {
      setErrorsSignup(body.error)
    }
  }

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
        onChange={(e) => setSignUpUsername(e.target.value)}
          style={{ paddingLeft: 20 }}
          placeholder="Name"
          placeholderTextColor="white"
          color="white"
        />

        <Input
        onChange={(e) => setSignUpEmail(e.target.value)}
          style={{ paddingLeft: 20 }}
          placeholder="Email"
          placeholderTextColor="white"
          color="white"
        />

        <Input
        onChange={(e) => setSignUpPassword(e.target.value)}
          style={{ paddingLeft: 20 }}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="white"
          color="white"
        />
        </View>

        <View style={{marginTop:1/35*windowHeight,flexDirection:"row", justifyContent: "space-around", alignItems:"center"}}>
        <Button onPress={() => handleSubmitSignup ()} buttonStyle={{backgroundColor:"#CF779E"}} title="Connexion" />
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
