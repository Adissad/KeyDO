import React from 'react';
import { View, StyleSheet, Text, Dimensions} from "react-native";
import {FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


export default function SpotifyRedirectionScreen() {
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
              <Text style={{color:"#FFFFFF", fontSize:20}}>Redirecting to Spotify</Text>
          </View>
  
          <View style={{marginTop:1/9*windowHeight,flexDirection:"row", justifyContent: "space-around", alignItems:"center", height:"auto"}} >
            <FontAwesome name="spotify" size={60} color="#1DB954"/>
          </View>

          <View style={{marginTop:1/9*windowHeight,flexDirection:"row", justifyContent: "space-around", alignItems:"center", height:"auto"}} >
          <FontAwesome name="spinner" size={50} color="#FFFFFF" />
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
  
  });