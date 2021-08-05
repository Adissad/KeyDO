import React, { useState } from 'react';

import { View, Dimensions, Text, StyleSheet,TouchableOpacity, ScrollView
} from 'react-native';

import { Avatar, ListItem } from 'react-native-elements';


import { LinearGradient } from 'expo-linear-gradient';

// import { connect } from 'react-redux';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ConvScreen(props) {

	const [usersList, setUsersList] = useState([]);

	const usersData = [
		{ id: '0', name: 'Rémy', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/pinguin_sdhh33.png", gender: 'Homme', age: '40 ans', city: 'Paris', desc: '#Voyages #Photographie #Art' },
		{ id: '1', name: 'Jack', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/man_hsazsc.png", gender: 'Homme', age: '35 ans', city: 'Paris', desc: '#Sport #Cuisine #Dance' },
		{ id: '2', name: 'Carol', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/rabbit_agqvgi.png", gender: 'Femme', age: '27 ans', city: 'Paris', desc: '#Photographie #Yoga #Cuisine' },
		{ id: '3', name: 'Christophe', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/pinguin_sdhh33.png", gender: 'Homme', age: '29 ans', city: 'Paris', desc: '#Voyages #Photographie #Dance' },
		{ id: '4', name: 'Alicia', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/woman_qcdude.png", gender: 'Femme', age: '30 ans', city: 'Paris', desc: '#Musées #Voyages #Dance' },
		{ id: '5', name: 'Jay', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/cat_g0h6co.png", gender: 'Homme', age: '19 ans', city: 'Paris', desc: '#Voyages #Photographie #Dance' },
		{ id: '6', name: 'Jean', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/dog_bj575p.png", gender: 'Homme', age: '25 ans', city: 'Paris', desc: '#Voyages #Dance #Photographie' },
		{ id: '7', name: 'Jonathan', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/cat_g0h6co.png", gender: 'Homme', age: '32 ans', city: 'Paris', desc: '#Photographie #Voyages #Dance' },
		{ id: '8', name: 'Cyprien', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/man_hsazsc.png", gender: 'Homme', age: '29 ans', city: 'Paris', desc: '#Photographie #Théâtre #Cuisine' },
		{ id: '9', name: 'Antoine', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/man_hsazsc.png", gender: 'Homme', age: '24 ans', city: 'Paris', desc: '#Voyages #Photographie #Dance' },
		{ id: '10', name: 'Arnaud', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/pinguin_sdhh33.png", gender: 'Homme', age: '32 ans', city: 'Paris', desc: '#Voyages #Photographie #Dance' },
		{ id: '11', name: 'John', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/man_hsazsc.png", gender: 'Homme', age: '38 ans', city: 'Paris', desc: '#Dance #Voyages #Photographie' },
		{ id: '12', name: 'Kyle', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/man_hsazsc.png", gender: 'Homme', age: '27 ans', city: 'Paris', desc: '#Voyages #Photographie #Dance' },
		{ id: '13', name: 'Juliette', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/cat_g0h6co.png", gender: 'Femme', age: '26 ans', city: 'Paris', desc: '#Sport #Voyages #Photographie' },
		{ id: '14', name: 'Yann', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/dog_bj575p.png", gender: 'Homme', age: '33 ans', city: 'Paris', desc: '#Yoga #Photographie #Voyages' },
		{ id: '15', name: 'Méwen', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/man_hsazsc.png", gender: 'Homme', age: '25 ans', city: 'Paris', desc: '#Voyages #Photographie #Sport' },
		{ id: '16', name: 'Masi', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/dog_bj575p.png", gender: 'Homme', age: '30 ans', city: 'Paris', desc: '#Voyages #Sport #Cuisine' },
		{ id: '17', name: 'Elton', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/man_hsazsc.png", gender: 'Homme', age: '35 ans', city: 'Paris', desc: '#Activité manuelles #Photographie #Art' },
		{ id: '18', name: 'Clothilde', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/woman_qcdude.png", gender: 'Femme', age: '25 ans', city: 'Paris', desc: '#Littérature #Voyages #Dance' },
		{ id: '19', name: 'Julie', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/rabbit_agqvgi.png", gender: 'Femme', age: '25 ans', city: 'Paris', desc: '#Voyages #Photographie #Cuisine' },
		{ id: '20', name: 'Willem', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/man_hsazsc.png", gender: 'Homme', age: '34 ans', city: 'Paris', desc: '#Cuisine #Art #Dance' },
	];

	// .map() to display conversation's list
	let convList = usersData.map((element, i) => {
		return (
			<View key={i}>
				<TouchableOpacity onPress={() => { props.navigation.navigate('Chat') }} >
					<View style={styles.item} bottomDivider>
						<ListItem.Content style={styles.itemContent} >
							<Avatar rounded size="medium" source={{ uri: element.avatar }} />
							<ListItem.Title style={styles.title}> {element.name} </ListItem.Title>
							{/* <ListItem.Subtitle style={styles.gender}> {element.gender} </ListItem.Subtitle> */}
							{/* <ListItem.Subtitle style={styles.age}> {element.age} </ListItem.Subtitle>
              <ListItem.Subtitle style={styles.city}> {element.city} </ListItem.Subtitle>
              <ListItem.Subtitle style={styles.desc}> {element.desc} </ListItem.Subtitle> */}
						</ListItem.Content>
					</View>
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

					{convList}

				</ScrollView>

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
		marginTop: 1 / 15 * windowHeight
	},

	item: {
		borderRadius: 15,
		borderColor: "white",
		borderWidth: 0.5,
		padding: 4,
		marginVertical: 1 / 100 * windowHeight,
		marginHorizontal: 1 / 30 * windowWidth,
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
