import React, { useState, useEffect } from 'react';

import {
	View,
	Dimensions,
	Text,
	StyleSheet,
	TouchableOpacity,
	SafeAreaView
} from 'react-native';

import { Avatar } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';

// import { connect } from 'react-redux';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ConvScreen(props) {

	const usersData = [
		{ id: '123', title: 'Yendze', avatar: 'avatar 1' },
		{ id: '456', title: 'Mathias', avatar: 'avatar 2' },
		{ id: '789', title: 'Adissa', avatar: 'avatar 3' },
	];

	const Item = ({ title }) => (

			<View style={styles.item} >

				<TouchableOpacity onPress={() => { props.navigation.navigate('Chat') }} >

					<View>

						<Avatar 
							rounded
							size= "medium"
							// source= {{uri: "http://172.17.1.53:3000/avatar.jpg" }} TO GET IT FROM BACKEND
							source= {require("../assets/avatar.jpg" ) }
						/>

						<Text style={styles.title}>
							{title}
						</Text>

					</View>
				</TouchableOpacity>
			</View>
	);

	const renderItem = ({ item }) => <Item title={item.title} />;

	return (
		<SafeAreaView style={styles.container}>

			<Text style={styles.screenTitle}>
				Contacts
			</Text>

			<FlatList
				data={usersData}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
			/>
		</SafeAreaView>
	);
}

// STYLE
const styles = StyleSheet.create({

	container: {
		flex: 1,
		backgroundColor: "orange"
	},

	screenTitle: {
		textAlign: "center",
		fontSize: 20,
		fontWeight: "bold"
	},

	item: {
		borderRadius: 10,
		backgroundColor: "white",
		padding: 6,
		marginVertical: 1/200 * windowHeight,
		marginHorizontal: 1/40 * windowWidth,
	},

	title: {
		backgroundColor: "red",
		fontSize: 20,
		fontStyle: "italic"
	},
});