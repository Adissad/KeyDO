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
		{ id: '0', title: 'Aurélie', avatar: '../assets/Aurélie.jpg' },
		{ id: '1', title: 'Jack', avatar: '../assets/Aurélie.jpg' },
		{ id: '2', title: 'Carol', avatar: '../assets/Aurélie.jpg' },
		{ id: '3', title: 'Christophe', avatar: '../assets/Aurélie.jpg' },
		{ id: '4', title: 'Jason', avatar: '../assets/Aurélie.jpg' },
		{ id: '5', title: 'Jay', avatar: '../assets/Aurélie.jpg' },
		{ id: '6', title: 'Jean', avatar: '../assets/Aurélie.jpg' },
		{ id: '7', title: 'Jonathan', avatar: '../assets/Aurélie.jpg' },
		{ id: '8', title: 'Josette', avatar: '../assets/Aurélie.jpg' },
	];

	const Item = ({ title }) => (

			<View style={styles.item} >

				<TouchableOpacity onPress={() => { props.navigation.navigate('Chat') }} >

					<View style={styles.itemContent} >

						<Avatar
							rounded
							size= "medium"
							// source= {{uri: "http://172.17.1.53:3000/avatar.jpg" }} TO GET IT FROM BACKEND
							source= {require("../assets/Avatar.jpg")}
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
		backgroundColor: "#666666"
	},

	screenTitle: {
		textAlign: "center",
		fontSize: 18,
		fontWeight: "bold",
		marginTop: "2%",
		marginBottom: "2%",
		color: "white"
	},

	item: {
		borderRadius: 30,
		backgroundColor: "#d8d8d8",
		padding: 4,
		marginVertical: 1/100 * windowHeight,
		marginHorizontal: 1/30 * windowWidth,
	},

	itemContent: {
		flex: 1,
		flexDirection: "row",
		alignContent: "space-around",
		alignItems: "center",

	},

	title: {
		flex: 1,
		textAlign: "center",
		marginRight: "10%",
		fontSize: 20,
		fontStyle: "italic"
	},
});