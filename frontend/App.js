import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen'
import StartScreen from './screens/StartScreen';

import { Ionicons } from '@expo/vector-icons'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
 
          if (route.name == 'Home') {
            iconName = 'Home';
          } else if (route.name == 'Match') {
            iconName = 'Heart';
          }
          else if (route.name == 'Conv') {
           iconName = 'chatbubbles-outline';
         }
  
          return <Ionicons name={iconName} size={25} color={color} />;
        },
        })}
      tabBarOptions={{
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#66F',
        style: {
          backgroundColor: '',
        }
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Match" component={ChooseMatchScreen} />
      <Tab.Screen name="Conv" component={ConvScreen} />
    </Tab.Navigator>
  );
 }

export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator screenOptions={{headerShown: false}}>
       <Stack.Screen name="Start" component={StartScreen} />
       <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
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
