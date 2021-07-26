import React from 'react';
import { View, StyleSheet } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome";
// import { Icon } from 'react-native-elements'
import { Input } from "react-native-elements";
import { LinearGradient } from 'expo-linear-gradient';

export default function ConnexionScreen() {
  return (
    <View style={styles.container}>
            <LinearGradient
                colors={['#FF8ABD', '#EF7365']}
                start={{
                    x: 0,
                    y: 0
                }}
                end={{
                    x: 1,
                    y: 1
                }}
                style={styles.box}>


      <Input style={{paddingTop:600, paddingLeft:50}} placeholder="Name" placeholderTextColor="white"/>

      <Input style={{paddingLeft:50}} placeholder="Email" placeholderTextColor="white"/>

      <Input style={{paddingLeft:50}} placeholder="Password" secureTextEntry={true} placeholderTextColor="white" />

      </LinearGradient>
    </View>

  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        letterSpacing: 0,
        lineHeight: 1.2,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',

        // fontFamily: ,
    },

    box: {
        width: 428,
        height: 926,
    },
});