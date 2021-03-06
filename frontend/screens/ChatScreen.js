import React, { useState, useEffect } from 'react';

import {
	View,
	ScrollView,
	KeyboardAvoidingView,
	StyleSheet,
	TextInput,
	Text,
	Dimensions,
	SafeAreaView,
	TouchableOpacity
} from 'react-native';

import { Button, ListItem } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { KeyboardAccessoryView } from 'react-native-keyboard-accessory'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ChatScreen(props) {

	const [currentMessage, setCurrentMessage] = useState('');

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

				<View style={{ zIndex: 1 }}>
					<View style={{ marginLeft: 1 / 25 * windowWidth, marginTop: 1 / 20 * windowHeight }} >
						<TouchableOpacity onPress={() => { props.navigation.navigate('Conv') }} >
							<Ionicons
								name="arrow-back"
								size={25}
								color="white"
							/>
						</TouchableOpacity>
					</View>

					<View style={{ marginHorizontal: 1 / 8 * windowWidth, marginTop: -1 / 90 * windowHeight }}>
						<Text style={{ textAlign: "center", fontSize: 20, color: "white" }}>
							Alicia
						</Text>
					</View>

					<View>
						<Text style={styles.conversationTitle}>
							Album disponible depuis le 30/07/21
						</Text>
					</View>
				</View>

				<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "position" : "height"}>
					<ScrollView>

						<View style={styles.senderBubble}>
							<ListItem.Content style={styles.senderBubbleContent}>
								<ListItem.Title style={styles.bubbleTitle}>Mathias</ListItem.Title>
								<ListItem.Subtitle style={styles.bubbleSubtitle}>Hey Alicia, on a un match presque parfait !</ListItem.Subtitle>
							</ListItem.Content>
						</View>

						<View style={styles.receiverBubble}>
							<ListItem.Content style={styles.receiverBubbleContent}>
								<ListItem.Title style={styles.bubbleTitle}>Alicia</ListItem.Title>
								<ListItem.Subtitle style={styles.bubbleSubtitle}>Salut, ouai j'ai rarement eu un match aussi pr??cis. Ravi de faire ta connaissance !</ListItem.Subtitle>
							</ListItem.Content>
						</View>

						<View style={styles.senderBubble}>
							<ListItem.Content style={styles.senderBubbleContent}>
								<ListItem.Title style={styles.bubbleTitle}>Mathias</ListItem.Title>
								<ListItem.Subtitle style={styles.bubbleSubtitle}>De m??me, t'as un genre coup de coeur que tu aimes par dessus tout ?</ListItem.Subtitle>
							</ListItem.Content>
						</View>

						<View style={styles.receiverBubble}>
							<ListItem.Content style={styles.receiverBubbleContent}>
								<ListItem.Title style={styles.bubbleTitle}>Alicia</ListItem.Title>
								<ListItem.Subtitle style={styles.bubbleSubtitle}>J'avais la m??me question ! Moi c'est plut??t ??lectro au quotidien, j'en ??coute vraiment tous les jours pendant mes activit??s.</ListItem.Subtitle>
							</ListItem.Content>
						</View>

						<View style={styles.senderBubble}>
							<ListItem.Content style={styles.senderBubbleContent}>
								<ListItem.Title style={styles.bubbleTitle}>Mathias</ListItem.Title>
								<ListItem.Subtitle style={styles.bubbleSubtitle}>Ouai j'en ??coute aussi, mais au quotidien je suis plut??t RnB.</ListItem.Subtitle>
							</ListItem.Content>
						</View>

						<View style={styles.receiverBubble}>
							<ListItem.Content style={styles.receiverBubbleContent}>
								<ListItem.Title style={styles.bubbleTitle}>Alicia</ListItem.Title>
								<ListItem.Subtitle style={styles.bubbleSubtitle}>J'aime bien le RnB, mais plut??t en soir??e !</ListItem.Subtitle>
							</ListItem.Content>
						</View>

						<View style={styles.senderBubble}>
							<ListItem.Content style={styles.senderBubbleContent}>
								<ListItem.Title style={styles.bubbleTitle}>Mathias</ListItem.Title>
								<ListItem.Subtitle style={styles.bubbleSubtitle}>Oui c'est vrai que je trouve ??a id??al en soir??e. Sinon tu as d'autres pr??f??rences particuli??res ? Genres ou artistes ?</ListItem.Subtitle>
							</ListItem.Content>
						</View>

						<View style={styles.receiverBubble}>
							<ListItem.Content style={styles.receiverBubbleContent}>
								<ListItem.Title style={styles.bubbleTitle}>Alicia</ListItem.Title>
								<ListItem.Subtitle style={styles.bubbleSubtitle}>J'adore ??couter du Jazz pendant mes jours de repos, je pourrais en ??couter une journ??e enti??re...</ListItem.Subtitle>
							</ListItem.Content>
						</View>

						<View style={styles.senderBubble}>
							<ListItem.Content style={styles.senderBubbleContent}>
								<ListItem.Title style={styles.bubbleTitle}>Mathias</ListItem.Title>
								<ListItem.Subtitle style={styles.bubbleSubtitle}>Je comprend, j'ai plein de vinyles de Jazz ?? la maison, il y en a toujours un qui tourne.</ListItem.Subtitle>
							</ListItem.Content>
						</View>

						<View style={styles.receiverBubble}>
							<ListItem.Content style={styles.receiverBubbleContent}>
								<ListItem.Title style={styles.bubbleTitle}>Alicia</ListItem.Title>
								<ListItem.Subtitle style={styles.bubbleSubtitle}>Oh tu as une platine vinyle ? Je suis fan !</ListItem.Subtitle>
							</ListItem.Content>
						</View>

						<View style={styles.senderBubble}>
							<ListItem.Content style={styles.senderBubbleContent}>
								<ListItem.Title style={styles.bubbleTitle}>Mathias</ListItem.Title>
								<ListItem.Subtitle style={styles.bubbleSubtitle}>Oui, cadeau de mon p??re. C'est un fin connaisseur qui m'a transmis sa passion.</ListItem.Subtitle>
							</ListItem.Content>
						</View>

						<View style={styles.receiverBubble}>
							<ListItem.Content style={styles.receiverBubbleContent}>
								<ListItem.Title style={styles.bubbleTitle}>Alicia</ListItem.Title>
								<ListItem.Subtitle style={styles.bubbleSubtitle}>Quelle chance ! J'aimerais beaucoup en acheter une mais j'ai besoin de bons conseils...</ListItem.Subtitle>
							</ListItem.Content>
						</View>

						<View style={styles.senderBubble}>
							<ListItem.Content style={styles.senderBubbleContent}>
								<ListItem.Title style={styles.bubbleTitle}>Mathias</ListItem.Title>
								<ListItem.Subtitle style={styles.bubbleSubtitle}>Je peux te donner quelques conseils et t'aider ?? choisir si tu veux.</ListItem.Subtitle>
							</ListItem.Content>
						</View>

						<View style={styles.receiverBubble}>
							<ListItem.Content style={styles.receiverBubbleContent}>
								<ListItem.Title style={styles.bubbleTitle}>Alicia</ListItem.Title>
								<ListItem.Subtitle style={styles.bubbleSubtitle}>Merci, ??a m'aiderait beaucoup franchement. T'aimes les concerts ?</ListItem.Subtitle>
							</ListItem.Content>
						</View>

						<View style={styles.senderBubble}>
							<ListItem.Content style={styles.senderBubbleContent}>
								<ListItem.Title style={styles.bubbleTitle}>Mathias</ListItem.Title>
								<ListItem.Subtitle style={styles.bubbleSubtitle}>Ouai et encore plus les festivals, je pr??f??re ??tre en plein air.</ListItem.Subtitle>
							</ListItem.Content>
						</View>

						<View style={styles.msgCounter}>
							<ListItem.Content>
								<ListItem.Subtitle style={{ fontSize: 14, textAlign: "center", color: "white" }}>
									Plus que 20 messages avant de pouvoir ??changer une photo !
								</ListItem.Subtitle>
							</ListItem.Content>
						</View>

						<View style={styles.receiverBubble}>
							<ListItem.Content style={styles.receiverBubbleContent}>
								<ListItem.Title style={styles.bubbleTitle}>Alicia</ListItem.Title>
								<ListItem.Subtitle style={styles.bubbleSubtitle}>Ha je comprend compl??tement... moi j'aime aussi les raves justement parce que c'est en plein air ou dans des endroits insolites.</ListItem.Subtitle>
							</ListItem.Content>
						</View>

					</ScrollView>
				</KeyboardAvoidingView>
			</LinearGradient>

			<KeyboardAccessoryView alwaysVisible={true} androidAdjustResize style={{ borderTopWidth: 0 }}>
				{({ isKeyboardVisible }) => (
					<View style={styles.inputView}>
						<TextInput
							placeholder="Message..."
							placeholderTextColor="#b2b2b2"
							selectionColor="#b2b2b2"
							onChangeText={(currentMessage) => setCurrentMessage(currentMessage)}
							value={currentMessage}
							underlineColorAndroid="transparent"
							style={styles.input}
							keyboardAppearance="dark"
							multiline={true}
						/>
						{isKeyboardVisible && (
							<Button
								icon={
									<FontAwesome
										name="send-o"
										size={20}
										color="#f2f2f2"
									/>
								}
								style={styles.inputButton}
								type='clear'
							/>
						)}
					</View>
				)}
			</KeyboardAccessoryView>
		</View>
	);
};

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

	conversationTitle: {
		textAlign: "center",
		fontSize: 16,
		color: "white",
		marginTop: 1 / 75 * windowHeight
	},

	msgCounter: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#FF8ABD",
		marginHorizontal: 1 / 5 * windowWidth,
		borderRadius: 15,
		marginBottom: 20,
		padding: 10
	},

	inputView: {
		paddingTop: '2%',
		paddingBottom: '2%',
		paddingLeft: '2%',
		paddingRight: '2%',
		flexDirection: 'row',
		backgroundColor: '#333333'
	},

	input: {
		flexGrow: 1,
		borderWidth: 1,
		borderRadius: 10,
		padding: 10,
		fontSize: 16,
		color: "#f2f2f2",
		textAlignVertical: "top",
		backgroundColor: "#0c0c0c"
	},

	inputButton: {
		flexShrink: 1,
		paddingLeft: 5,
	},

	senderBubble: {
		flex: 1,
		alignItems: "flex-end",
		marginLeft: 1 / 5 * windowWidth,
		marginVertical: "5%"
	},

	receiverBubble: {
		flex: 1,
		alignItems: "flex-start",
		marginRight: 1 / 5 * windowWidth,
	},

	senderBubbleContent: {
		backgroundColor: '#2464A2',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 2,
		paddingHorizontal: 15,
		paddingVertical: 10,
		marginRight: 1 / 30 * windowWidth,
	},

	receiverBubbleContent: {
		backgroundColor: '#693192',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		borderBottomRightRadius: 20,
		borderBottomLeftRadius: 2,
		paddingHorizontal: 15,
		paddingVertical: 10,
		marginLeft: 1 / 30 * windowWidth
	},

	bubbleTitle: {
		fontWeight: "bold",
		color: "white"
	},

	bubbleSubtitle: {
		marginTop: 5,
		color: "white"
	},
});