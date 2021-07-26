import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements'

export default function HomeScreen(props) {

  return (

		<View style={styles.container} >
			<Button
				title="Go to Chat"
				type="solid"
				onPress={() => {
					props.navigation.navigate('BottomNavigator', { screen: 'Chat' });
				}}
			/>
		</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});