import React, {useState, useEffect} from 'react';

import {
	View,
	ScrollView,
	KeyboardAvoidingView,
	StyleSheet,
	TextInput,
	Text,
	Dimensions,
	TouchableOpacity
} from 'react-native';

import { Button, ListItem, Input } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome, Ionicons } from '@expo/vector-icons'; 
import { KeyboardAccessoryView } from 'react-native-keyboard-accessory';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ChatScreen(props) {

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

			<View style={{marginLeft: 1/25 * windowWidth, marginTop: 1/20 * windowHeight}} >
				<TouchableOpacity onPress={() => { props.navigation.navigate('Conv') }} >
					<Ionicons
						name= "arrow-back"
						size= {25}
						color= "white"
					/>
				</TouchableOpacity>
			</View>

			<View style={{marginHorizontal: 1/8 * windowWidth, marginTop: -1/24 * windowHeight}}>
				<Text style={{textAlign: "center", fontSize:20, color:"white"}}>
					Lucy
				</Text>
			</View>

			<View>
				<Text style={styles.conversationTitle}>
					Album disponible depuis le 30/07/21
				</Text>
			</View>

			<View style={styles.msgCounter}>
				<Text style={{fontSize: 12, textAlign: "center", color: "white"}}>
					Plus que 10 messages avant de pouvoir échanger une photo !
				</Text>
			</View>

			<ScrollView>
				<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>

					<View style={styles.senderBubble}>
						<ListItem.Content style={styles.senderBubbleContent}>
							<ListItem.Title style={styles.bubbleTitle}>John</ListItem.Title>
							<ListItem.Subtitle style={styles.bubbleSubtitle}>Salut Lucy ! Tu vas bien ?</ListItem.Subtitle>
						</ListItem.Content>
					</View>
					<View style={styles.senderBubble}>
						<ListItem.Content style={styles.senderBubbleContent}>
							<ListItem.Title style={styles.bubbleTitle}>John</ListItem.Title>
							<ListItem.Subtitle style={styles.bubbleSubtitle}>Salut Lucy ! Tu vas bien ?</ListItem.Subtitle>
						</ListItem.Content>
					</View>
					<View style={styles.senderBubble}>
						<ListItem.Content style={styles.senderBubbleContent}>
							<ListItem.Title style={styles.bubbleTitle}>John</ListItem.Title>
							<ListItem.Subtitle style={styles.bubbleSubtitle}>Salut Lucy ! Tu vas bien ?</ListItem.Subtitle>
						</ListItem.Content>
					</View>
					<View style={styles.senderBubble}>
						<ListItem.Content style={styles.senderBubbleContent}>
							<ListItem.Title style={styles.bubbleTitle}>John</ListItem.Title>
							<ListItem.Subtitle style={styles.bubbleSubtitle}>Salut Lucy ! Tu vas bien ?</ListItem.Subtitle>
						</ListItem.Content>
					</View>
					<View style={styles.senderBubble}>
						<ListItem.Content style={styles.senderBubbleContent}>
							<ListItem.Title style={styles.bubbleTitle}>John</ListItem.Title>
							<ListItem.Subtitle style={styles.bubbleSubtitle}>Salut Lucy ! Tu vas bien ?</ListItem.Subtitle>
						</ListItem.Content>
					</View>
					<View style={styles.senderBubble}>
						<ListItem.Content style={styles.senderBubbleContent}>
							<ListItem.Title style={styles.bubbleTitle}>John</ListItem.Title>
							<ListItem.Subtitle style={styles.bubbleSubtitle}>Salut Lucy ! Tu vas bien ?</ListItem.Subtitle>
						</ListItem.Content>
					</View>
					<View style={styles.senderBubble}>
						<ListItem.Content style={styles.senderBubbleContent}>
							<ListItem.Title style={styles.bubbleTitle}>John</ListItem.Title>
							<ListItem.Subtitle style={styles.bubbleSubtitle}>Salut Lucy ! Tu vas bien ?</ListItem.Subtitle>
						</ListItem.Content>
					</View>
					<View style={styles.senderBubble}>
						<ListItem.Content style={styles.senderBubbleContent}>
							<ListItem.Title style={styles.bubbleTitle}>John</ListItem.Title>
							<ListItem.Subtitle style={styles.bubbleSubtitle}>Salut Lucy ! Tu vas bien ?</ListItem.Subtitle>
						</ListItem.Content>
					</View>
					<View style={styles.senderBubble}>
						<ListItem.Content style={styles.senderBubbleContent}>
							<ListItem.Title style={styles.bubbleTitle}>John</ListItem.Title>
							<ListItem.Subtitle style={styles.bubbleSubtitle}>Salut Lucy ! Tu vas bien ?</ListItem.Subtitle>
						</ListItem.Content>
					</View>
					<View style={styles.senderBubble}>
						<ListItem.Content style={styles.senderBubbleContent}>
							<ListItem.Title style={styles.bubbleTitle}>John</ListItem.Title>
							<ListItem.Subtitle style={styles.bubbleSubtitle}>Salut Lucy ! Tu vas bien ?</ListItem.Subtitle>
						</ListItem.Content>
					</View>
					<View style={styles.senderBubble}>
						<ListItem.Content style={styles.senderBubbleContent}>
							<ListItem.Title style={styles.bubbleTitle}>John</ListItem.Title>
							<ListItem.Subtitle style={styles.bubbleSubtitle}>Salut Lucy ! Tu vas bien ?</ListItem.Subtitle>
						</ListItem.Content>
					</View>

				</KeyboardAvoidingView>
			</ScrollView>
			</LinearGradient>

			<KeyboardAccessoryView alwaysVisible={true} androidAdjustResize>
				{({ isKeyboardVisible }) => (
					<View style={styles.inputView}>
						<TextInput
							placeholder="Message"
							placeholderTextColor="#b2b2b2"
							selectionColor="#b2b2b2"
							onChangeText={(currentMessage)=>setCurrentMessage(currentMessage)}
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
								type= 'clear'
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
		fontSize:12,
		color:"white",
		marginTop: 1/75 * windowHeight
	},

	msgCounter: {
		backgroundColor: "green",
		marginHorizontal: 1/5 * windowWidth,
		borderRadius: 15,
		marginTop: 1/75 * windowHeight,
		padding: 4
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
		marginLeft: 1/5 * windowWidth,
		marginVertical: "4%"
	},

	receiverBubble: {
		flex: 1,
		alignItems: "flex-start",
		marginRight: 1/5 * windowWidth,
	},

	senderBubbleContent: {
		backgroundColor: '#2464A2',
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
		borderBottomLeftRadius: 15,
		borderBottomRightRadius: 2,
		paddingHorizontal: 15,
		paddingVertical: 10,
		marginRight: 1/30 * windowWidth,
	},

	receiverBubbleContent: {
		backgroundColor: '#693192',
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
		borderBottomRightRadius: 15,
		borderBottomLeftRadius: 2,
		paddingHorizontal: 15,
		paddingVertical: 10,
		marginLeft: 1/30 * windowWidth
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