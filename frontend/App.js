import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);

import React from 'react';

// import { Provider } from 'react-redux'
// import { createStore, combineReducers }  from 'redux';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import StartScreen from './screens/StartScreen';
import ConnexionScreen from './screens/ConnexionScreen';
import SpotifyRedirectionScreen from './screens/SpotifyRedirectionScreen';
import AppleRedirectionScreen from './screens/AppleRedirectionScreen';
import ProfileScreen from './screens/ProfileScreen';
import HomeScreen from './screens/HomeScreen';
import ChooseMatchScreen from './screens/ChooseMatchScreen';
import ConvScreen from './screens/ConvScreen';
import ChatScreen from './screens/ChatScreen';

import DanceScreen from './screens/GenresMusic/DanceScreen';
import RnBScreen from './screens/GenresMusic/RnBScreen';
import HipHopScreen from './screens/GenresMusic/HipHopScreen';
import LatinoScreen from './screens/GenresMusic/LatinoScreen';
import JazzScreen from './screens/GenresMusic/JazzScreen';
import SoulScreen from './screens/GenresMusic/SoulScreen';
import RockScreen from './screens/GenresMusic/RockScreen';
import ClassiqueScreen from './screens/GenresMusic/ClassiqueScreen';
import ReggaeScreen from './screens/GenresMusic/ReggaeScreen';
import PopScreen from './screens/GenresMusic/PopScreen';
import FrenchScreen from './screens/GenresMusic/FrenchScreen';
import KpopScreen from './screens/GenresMusic/KpopScreen';
import MétalScreen from './screens/GenresMusic/MétalScreen';
import FunkScreen from './screens/GenresMusic/FunkScreen';
import FolkScreen from './screens/GenresMusic/FolkScreen';
import BluesScreen from './screens/GenresMusic/BluesScreen';
import CountryScreen from './screens/GenresMusic/CountryScreen';
import AfroScreen from './screens/GenresMusic/AfroScreen';
import DécenniesScreen from './screens/GenresMusic/DécenniesScreen';
import GospelScreen from './screens/GenresMusic/GospelScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// const store = createStore(combineReducers({}))

const BottomNavigator = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ color }) => {
					let iconName;

					if (route.name == 'Home') {
						iconName = 'home-outline';
					} else if (route.name == 'Match') {
						iconName = 'heart-outline';
					} else if (route.name == 'Conv') {
						iconName = 'chatbubbles-outline';
					}
					if (route.name == 'Profil') {
						iconName = 'person-outline';
					}
					return <Ionicons name={iconName} size={25} color={color} />;
				},
			})}
			tabBarOptions={{
				showIcon: true,
				showLabel: false,
				activeTintColor: '#FFFFFF',
				inactiveTintColor: '#66F',
				style: {
					backgroundColor: 'transparent',
					borderTopWidth: 0,
					position: 'absolute',
					elevation: 0,
				},
			}}>
			<Tab.Screen name='Home' component={HomeScreen} />
			<Tab.Screen name='Match' component={ChooseMatchScreen} />
			<Tab.Screen name='Conv' component={ConvScreen} />
			<Tab.Screen name='Profil' component={ProfileScreen} />
		</Tab.Navigator>
	);
};

export default function App() {
	return (
		// <Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen name='Start' component={StartScreen} />
					<Stack.Screen name='BottomNavigator' component={BottomNavigator} />
					<Stack.Screen name='Chat' component={ChatScreen} />
					<Stack.Screen name='Dance' component={DanceScreen} />
					<Stack.Screen name='RnB' component={RnBScreen} />
					<Stack.Screen name='HipHop' component={HipHopScreen} />
					<Stack.Screen name='Latino' component={LatinoScreen} />
					<Stack.Screen name='Jazz' component={JazzScreen} />
					<Stack.Screen name='Soul' component={SoulScreen} />
					<Stack.Screen name='Rock' component={RockScreen} />
					<Stack.Screen name='Classique' component={ClassiqueScreen} />
					<Stack.Screen	name='Reggae/Dancehall' component={ReggaeScreen} />
					<Stack.Screen name='Pop' component={PopScreen} />
					<Stack.Screen name='French' component={FrenchScreen} />
					<Stack.Screen name='Kpop' component={KpopScreen} />
					<Stack.Screen name='Métal' component={MétalScreen} />
					<Stack.Screen name='Funk' component={FunkScreen} />
					<Stack.Screen name='Folk' component={FolkScreen} />
					<Stack.Screen name='Blues' component={BluesScreen} />
					<Stack.Screen name='Country' component={CountryScreen} />
					<Stack.Screen name='Afro' component={AfroScreen} />
					<Stack.Screen name='Décennies' component={DécenniesScreen} />
					<Stack.Screen name='Gospel' component={GospelScreen} />
					<Stack.Screen name='Profile' component={ProfileScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		// </Provider>
	);
};