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

import { connect } from 'react-redux';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function ChatScreen(props) {

	const [currentMessage, setCurrentMessage] = useState('');
  const [messagesList, setMessagesList] = useState([]);
	const [messageCounter, setMessageCounter] = useState('');

	// Fetch messages from DB on component mount
  useEffect(() => {
    const findMessagesDB = async() => {
			/**
			*! IP adress required or network request will fail
			*/
			const rawDataDB = await fetch('http://192.168.1.56:3000/messages');
			const jsonDataDB = await rawDataDB.json();

			setMessagesList([...messagesList, jsonDataDB]);
			console.log('Messages fetched from DB :', jsonDataDB);
			console.log('messagesList :', messagesList);
		};
		findMessagesDB();
  }, []);

	// Send & save message to DB
	let saveMessage = async (currentMessage) => {
		if(currentMessage) {
			props.saveNewMessage(currentMessage);
			setMessagesList([...messagesList, currentMessage]);
			/**
			*! IP adress required or network request will fail
			*/
			const response = await fetch('http://192.168.1.56:3000/messages', {
				method: 'POST',
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				body: `content=${currentMessage}`
			});
		};
		console.log(messagesList)
	};

	// Map to display message in component
	// let currentMessagesList = messagesList.map((currentMessage, i) => {
	// 	return(
	// 		<View style={styles.senderBubble}>
	// 			<ListItem.Content style={styles.senderBubbleContent}>
	// 				<ListItem.Title style={styles.bubbleTitle}>John</ListItem.Title>
	// 				<ListItem.Subtitle style={styles.bubbleSubtitle}> {currentMessage} </ListItem.Subtitle>
	// 			</ListItem.Content>
	// 		</View>
	// 	);
	// });

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

				{/* <View style={styles.senderBubble}>
					<ListItem.Content style={styles.senderBubbleContent}>
						<ListItem.Title style={styles.bubbleTitle}>John</ListItem.Title>
						<ListItem.Subtitle style={styles.bubbleSubtitle}>Hey, how are you ?</ListItem.Subtitle>
					</ListItem.Content>
				</View>

				<View style={styles.receiverBubble}>
					<ListItem.Content style={styles.receiverBubbleContent} >
						<ListItem.Title style={styles.bubbleTitle}>Lucy</ListItem.Title>
						<ListItem.Subtitle style={styles.bubbleSubtitle}>I'm good thanks ! How are you doing ?</ListItem.Subtitle>
					</ListItem.Content>
				</View>

				<View style={styles.senderBubble}>
					<ListItem.Content style={styles.senderBubbleContent} >
						<ListItem.Title style={styles.bubbleTitle}>John</ListItem.Title>
						<ListItem.Subtitle style={styles.bubbleSubtitle}>I'm so tired. I didn't sleep much last night...</ListItem.Subtitle>
					</ListItem.Content>
				</View>

				<View style={styles.receiverBubble}>
					<ListItem.Content style={styles.receiverBubbleContent} >
						<ListItem.Title style={styles.bubbleTitle}>Lucy</ListItem.Title>
						<ListItem.Subtitle style={styles.bubbleSubtitle}>Stop coding until 2 AM !</ListItem.Subtitle>
					</ListItem.Content>
				</View>

				<View style={styles.senderBubble}>
					<ListItem.Content style={styles.senderBubbleContent} >
						<ListItem.Title style={styles.bubbleTitle}>John</ListItem.Title>
						<ListItem.Subtitle style={styles.bubbleSubtitle}>But i can't mess up the project !</ListItem.Subtitle>
					</ListItem.Content>
				</View>

				<View style={styles.receiverBubble}>
					<ListItem.Content style={styles.receiverBubbleContent} >
						<ListItem.Title style={styles.bubbleTitle}>Lucy</ListItem.Title>
						<ListItem.Subtitle style={styles.bubbleSubtitle}>Whatever...</ListItem.Subtitle>
					</ListItem.Content>
				</View>

				<View style={styles.senderBubble}>
					<ListItem.Content style={styles.senderBubbleContent} >
						<ListItem.Title style={styles.bubbleTitle}>John</ListItem.Title>
						<ListItem.Subtitle style={styles.bubbleSubtitle}>You can't imagine the amount of work.</ListItem.Subtitle>
					</ListItem.Content>
				</View>

				<View style={styles.receiverBubble}>
					<ListItem.Content style={styles.receiverBubbleContent} >
						<ListItem.Title style={styles.bubbleTitle}>Lucy</ListItem.Title>
						<ListItem.Subtitle style={styles.bubbleSubtitle}>Huh</ListItem.Subtitle>
					</ListItem.Content>
				</View> */}

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
								onPress={() => {saveMessage(currentMessage), setCurrentMessage('')}}
							/>
						)}
					</View>
				)}
			</KeyboardAccessoryView>
		</View>
  );
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// STORE
function mapStateToProps(state){
  return {messageList: state.messageList}
};

function mapDispatchToProps(dispatch){
  return {
    saveNewMessage: function(currentMessage){
      dispatch({ type: 'saveMessage', message: currentMessage })
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatScreen);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

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