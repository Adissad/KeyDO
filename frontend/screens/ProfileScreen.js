import React from 'react';
import { View, StyleSheet, Text, Dimensions} from "react-native";
import { FontAwesome, Ionicons, Fontisto } from "@expo/vector-icons";
import { Input } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;



export default function ConnexionScreen(props) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#2464A2", "#693192"]}
        start={{
          x: 0,
          y: 0.5,
        }}
        end={{
          x: 0.5,
          y: 0.8,
        }}
        locations={[0, 0.7]}
        style={styles.box}
      >

      </LinearGradient>
      </View>
  )}

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