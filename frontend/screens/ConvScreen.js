import React, { useState, useEffect } from 'react';

import {
	View,
	Dimensions,
	Text,
	StyleSheet,
	TouchableOpacity,
	ListItem
} from 'react-native';

import { Avatar } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

// import { connect } from 'react-redux';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ConvScreen(props) {

	// State of the users list component
	const [usersList, setUsersList] = useState([]);

	const usersData = [
		{ id: '0', name: 'Lucy', avatar: "../assets/Lucy.jpg"},
		{ id: '1', name: 'Jack', avatar: "../assets/Jack.jpg"},
		{ id: '2', name: 'Carol', avatar: "../assets/Carol.jpg"},
		{ id: '3', name: 'Christophe', avatar: "../assets/Christophe.jpg"},
		{ id: '4', name: 'Jason', avatar: "../assets/Jason.jpg"},
		{ id: '5', name: 'Jay', avatar: "../assets/Jay.jpg"},
		{ id: '6', name: 'Jean', avatar: "../assets/Jean.jpg"},
		{ id: '7', name: 'Jonathan', avatar: "../assets/Jonathan.jpg"},
		{ id: '8', name: 'Josette', avatar: "../assets/Josette.jpg"},
	];

	const Item = ({ name }) => (

		<View style={styles.item}>
			<TouchableOpacity onPress={() => { props.navigation.navigate('Chat') }}>
				<View style={styles.itemContent}>

					<Avatar
						rounded
						size= "medium"
						source= {require("../assets/Jack.jpg")}
					/>

					<Text style={styles.title}>
						{name}
					</Text>

				</View>
			</TouchableOpacity>
		</View>
	);

	const renderItem = ({ item }) => <Item name={item.name} />;

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

			<View>
				<Text style={styles.screenTitle}>
					Conversations
				</Text>
			</View>

				<FlatList
					data={usersData}
					renderItem={renderItem}
					keyExtractor={(item) => item.id}
				/>
			</LinearGradient>
		</View>
	);
};


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// STYLE
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

	screenTitle: {
		textAlign: "center",
		fontSize: 18,
		fontWeight: "bold",
		color: "white",
		marginBottom: 10,
		marginTop: 1/20 * windowHeight
	},

	item: {
		borderRadius: 15,
		borderColor: "white",
		borderWidth: 0.5,
		padding: 4,
		marginVertical: 1/100 * windowHeight,
		marginHorizontal: 1/30 * windowWidth,
	},

	itemContent: {
		flex: 1,
		flexDirection: "row",
		alignContent: "space-around",
		alignItems: "center",
		padding: 4
	},

	title: {
		flex: 1,
		textAlign: "center",
		marginRight: "10%",
		fontSize: 20,
		color: "white",
		fontStyle: "italic"
	}
});