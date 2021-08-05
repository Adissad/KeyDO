import React from 'react';

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

	const usersData = [
		{ name: 'Christophe', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/man_hsazsc.png"},
		{ name: 'Jack', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/cat_g0h6co.png"},
		{ name: 'Carole', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/woman_qcdude.png"},
		{ name: 'Alicia', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/pinguin_sdhh33.png"},
		{ name: 'Rémy', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/cat_g0h6co.png"},
		{ name: 'Jay', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/man_hsazsc.png"},
		{ name: 'Jean', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/rabbit_agqvgi.png"},
		{ name: 'Jonathan', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/pinguin_sdhh33.png"},
		{ name: 'Cyprien', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/cat_g0h6co.png"},
		{ name: 'Antoine', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/rabbit_agqvgi.png"},
		{ name: 'Arnaud', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/man_hsazsc.png"},
		{ name: 'John', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/pinguin_sdhh33.png"},
		{ name: 'Kyle', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/cat_g0h6co.png"},
		{ name: 'Juliette', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/woman_qcdude.png"},
		{ name: 'Yann', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/rabbit_agqvgi.png"},
		{ name: 'Méwen', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/man_hsazsc.png"},
		{ name: 'Masinissa', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/man_hsazsc.png"},
		{ name: 'Elton', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/pinguin_sdhh33.png"},
		{ name: 'Clothilde', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/woman_qcdude.png"},
		{ name: 'Julie', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/cat_g0h6co.png"},
		{ name: 'Willem', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/rabbit_agqvgi.png"},
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

//STYLE
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