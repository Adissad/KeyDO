import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';

import socketIOClient from "socket.io-client";

// Pensez à changer l'adresse ci-dessous avec votre IP locale !
// let socket = socketIOClient("http://192.168.1.15:3000");
// 192.168.1.15 (home IP)
// 172.17.1.53 (LaCapsule IP)

export default function ConvScreen(props) {

	return(


			<View style={{flex:1, justifyContent:'flex-end', backgroundColor: 'orange'}}>
				<Button
					title= 'Go to Chat Room'
					titleStyle={{color: 'black'}}
					type= 'solid'
					onPress={()=> { props.navigation.navigate('Chat') }}
				/>
			</View>

	);
};  