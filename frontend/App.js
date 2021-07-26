import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen'
// import StartScreen from './screens/StartScreen';
import ChatScreen from './screens/ChatScreen';
// import ConvScreen from './screens/ConvScreen';
// import ChooseMatchScreen from './screens/ChooseMatchScreen';

import { Ionicons } from '@expo/vector-icons'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// const BottomNavigator = () => {
//   return (

//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ color }) => {
//           let iconName;
 
//           if (route.name == 'Home') {
//             iconName = 'home';
//           } else if (route.name == 'Match') {
//           	iconName = 'heart';
//           }	else if (route.name == 'Chat') {
//            	iconName = 'chatbubbles-outline';
//          	}
  
//           return <Ionicons name={iconName} size={25} color={color} />;
//         },
//         })}
//       tabBarOptions={{
//         activeTintColor: 'orange',
//         inactiveTintColor: '#4c4c4c',
//         style: {
//           backgroundColor: '#000000',
//         }
//       }}
//     >
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Chat" component={ChatScreen} />
//       <Tab.Screen name="Conv" component={ConvScreen} />
//     </Tab.Navigator>
//   );
//  }

export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator>
       {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
       <Stack.Screen name="Chat" component={ChatScreen} />
     </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
