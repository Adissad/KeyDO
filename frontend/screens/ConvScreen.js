import React, { useState, useEffect } from 'react';

import {
	View,
	Dimensions,
	Text,
	StyleSheet,
	TouchableOpacity,
	ScrollView
} from 'react-native';

import { Avatar, ListItem } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ConvScreen(props) {

	const [usersList, setUsersList] = useState([]);

	const usersData = [
		{ id: '0', name: 'Lucy', avatar: "https://res.cloudinary.com/cloudinary-mewen/image/upload/v1627911642/Lucy_dh3z09.jpg"},
		{ id: '1', name: 'Jack', avatar: "https://res.cloudinary.com/cloudinary-mewen/image/upload/v1627911641/Avatar_rwljdc.jpg"},
		{ id: '2', name: 'Carol', avatar: "https://res.cloudinary.com/cloudinary-mewen/image/upload/v1627911641/Carol_hhobdb.jpg"},
		{ id: '3', name: 'Christophe', avatar: "https://res.cloudinary.com/cloudinary-mewen/image/upload/v1627911641/Christophe_b7v7eh.jpg"},
		{ id: '4', name: 'Jason', avatar: "https://res.cloudinary.com/cloudinary-mewen/image/upload/v1627911641/Jason_xxiydz.jpg"},
		{ id: '5', name: 'Jay', avatar: "https://res.cloudinary.com/cloudinary-mewen/image/upload/v1627911641/Jay_qpbkmk.jpg"},
		{ id: '6', name: 'Jean', avatar: "https://res.cloudinary.com/cloudinary-mewen/image/upload/v1627911642/Jean_oikqtr.jpg"},
		{ id: '7', name: 'Jonathan', avatar: "https://res.cloudinary.com/cloudinary-mewen/image/upload/v1627911642/Jonathan_xaw4n7.jpg"},
		{ id: '8', name: 'Josette', avatar: "https://res.cloudinary.com/cloudinary-mewen/image/upload/v1627911641/Josette_sgrif2.jpg"},
	];

	// .map() to display conversation's list
	let conversationsList = usersData.map((element, i) => {
		return(
			<View key={i} style={styles.item}>
				<TouchableOpacity onPress={() => { props.navigation.navigate('Chat') }}>
					<ListItem.Content style={styles.itemContent}>
						<Avatar rounded size="medium" source={{uri: element.avatar}} />
						<ListItem.Title style={styles.title}> {element.name} </ListItem.Title>
					</ListItem.Content>
				</TouchableOpacity>
			</View>
		);
	});

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

			<ScrollView>
				{conversationsList}
			</ScrollView>

			</LinearGradient>
		</View>
	);
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
*! STYLE
*/
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
		borderRadius: 20,
		borderColor: "white",
		borderWidth: 0.5,
		padding: 4,
		marginVertical: 1/100 * windowHeight,
		marginHorizontal: 1/30 * windowWidth
	},

	itemContent: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		padding: 4
	},

	title: {
		flex: 1,
		textAlign: "center",
		marginRight: "18%",
		fontSize: 18,
		color: "white",
		fontStyle: "italic"
	}
});