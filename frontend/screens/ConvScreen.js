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
import { LinearGradient } from 'expo-linear-gradient';

// import { connect } from 'react-redux';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ConvScreen(props) {

	const usersData = [
		{ id: '0', title: 'Lucy' },
		{ id: '1', title: 'Jack' },
		{ id: '2', title: 'Carol' },
		{ id: '3', title: 'Christophe' },
		{ id: '4', title: 'Jason' },
		{ id: '5', title: 'Jay'},
		{ id: '6', title: 'Jean' },
		{ id: '7', title: 'Jonathan' },
		{ id: '8', title: 'Josette'},
	];

	const Item = ({ title }) => (

			<View style={styles.item} >

				<TouchableOpacity onPress={() => { props.navigation.navigate('Chat') }} >

					<View style={styles.itemContent} >

						<Avatar
							rounded
							size= "medium"
							// source= {{uri: "http://172.17.1.53:3000/avatar.jpg" }} TO GET IT FROM BACKEND
							source= {require("../assets/avatar.jpg")}
						/>

						{/* <Image borderRadius="50%">

						</Image> */}

						<Text style={styles.title}>
							{title}
						</Text>

					</View>
				</TouchableOpacity>
			</View>
	);

	const renderItem = ({ item }) => <Item title={item.title} />;

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
	},
});
