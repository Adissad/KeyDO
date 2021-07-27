import React from 'react';
import { View, StyleSheet, Text, Dimensions} from "react-native";
import { FontAwesome, Ionicons, Fontisto } from "@expo/vector-icons";
import { Input, Button } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;



export default function ConnexionScreen(props) {
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
          onPress={() => {props.navigation.navigate("BottomNavigator", {screen: 'SpotifyRedirectionScreen' })}} /> 
          <Fontisto name="applemusic" size={50} color="#FC3C44"
          onPress={() => {props.navigation.navigate("BottomNavigator", {screen: 'AppleRedirectionScreen' })}} />
        </View>

        <View style={{marginTop:1/8*windowHeight,flexDirection:"row", justifyContent: "space-around", alignItems:"center"}}>
            <View style={styles.separator}></View>
        <Text> OR </Text>
            <View style={styles.separator}></View>
        </View>


        <View style={{marginTop:1/10*windowHeight, justifyContent:"center" ,flexDirection:"column" }} >
        <Input
          style={{ paddingLeft: 20 }}
          placeholder="Name"
          placeholderTextColor="white"
        />

        <Input
          style={{ paddingLeft: 20 }}
          placeholder="Email"
          placeholderTextColor="white"
        />

        <Input
          style={{ paddingLeft: 20 }}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="white"
        />
        </View>

        <View style={{marginTop:1/35*windowHeight,flexDirection:"row", justifyContent: "space-around", alignItems:"center"}}>
        <Button buttonStyle={{backgroundColor:"#CF779E"}} title="Connexion" onPress={() => {props.navigation.navigate("Profile")}} />
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
