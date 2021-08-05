import React from 'react';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { View } from 'react-native';

export default function ChooseMatchScreen(props) {

	return(
		<View style={{flex: 1, justifyContent: "center", backgroundColor: "black"}}>
			<View>
				<Button
					title="Go to RemyChatScreen"
					onPress={() => { props.navigation.navigate('Remy') }}
				/>
			</View>
			<View>
				<Button
					title="Go to MasiChatScreen"
					onPress={() => { props.navigation.navigate('Masi') }}
				/>
			</View>
			<View>
				<Button
					title="Go to ChatScreen"
					onPress={() => { props.navigation.navigate('Chat') }}
				/>
			</View>
		</View>
	);
};