import React from 'react';
import { Text, StyleSheet, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function RockScreen(props) {

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
          <Ionicons style={styles.notif} name='ios-arrow-back' onPress={() => { props.navigation.navigate('Home') }}/>
        <Text style={{ marginLeft: 1 / 20 * windowWidth, marginTop: 4 / 8 * windowHeight }}></Text>

      </LinearGradient>
    </View>

  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },

  box: {
    flex: 1,
    justifyContent: "flex-start",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
},

notif: {
  color: '#FFFFFF',
  fontSize: 28,
  marginLeft: 1 / 15 * windowWidth,
  paddingTop: 1 / 15 * windowHeight,

},

});