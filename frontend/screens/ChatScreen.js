import React, {useState, useEffect} from 'react';

import {
	View,
	ScrollView,
	KeyboardAvoidingView,
	StyleSheet,
	TextInput,
	Text,
	Dimensions,
	SafeAreaView
} from 'react-native';

import { Button, ListItem } from 'react-native-elements';
import { FontAwesome, Ionicons } from '@expo/vector-icons'; 
import { KeyboardAccessoryView } from 'react-native-keyboard-accessory'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ChatScreen(props) {

  // const [currentMessage, setCurrentMessage] = useState();
  // const [listMessage, setListMessage] = useState([]);

  // useEffect(() => {

  //   setListMessage([...listMessage, newMsgData]);

  // }, [listMessage]);

  // let listMessageItem = listMessage.map((msgData, i)=>{

  //   return (
  //     <ListItem key={i}>
  //       <ListItem.Content>
  //         <ListItem.Subtitle>{msgData}</ListItem.Subtitle>
  //       </ListItem.Content>
  //     </ListItem>
  //   );
  // });

  return (

    <View style={styles.container}>
			<Button
				style={{
					marginRight: 1/1.2 * windowWidth,
					marginTop: 1/25 * windowHeight
				}}
				icon={
					<Ionicons
						name= "arrow-back"
						size= {25}
						color= "white"
					/>
				}
				type="clear"
				onPress={() => { props.navigation.navigate('Conv') }}
			/>

			<ScrollView>

				{/* {listMessageItem} */}
				<View style={styles.senderBubble}>
					<ListItem.Content style={styles.senderBubbleContent} >
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
				</View>

			</ScrollView>

			<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
			</KeyboardAvoidingView>

			<KeyboardAccessoryView alwaysVisible={true} androidAdjustResize>
				{({ isKeyboardVisible }) => (
					<View style={styles.inputView}>
						<TextInput
							placeholder="Message"
							placeholderTextColor="#b2b2b2"
							selectionColor="#b2b2b2"
							// onChangeText={(messageData)=>setCurrentMessage(messageData)}
							// value={currentMessage}
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
								// onPress={()=> {
								// 	if(currentMessage) {
								// 	}
								// }}
							/>
						)}
					</View>
				)}
			</KeyboardAccessoryView>
		</View>
  );
};

// STYLE
const styles = StyleSheet.create({

  container: {
    flex: 1,
		backgroundColor: '#808080',
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
		backgroundColor: '#4ca64c',
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
		borderBottomLeftRadius: 15,
		borderBottomRightRadius: 2,
		paddingHorizontal: 15,
		paddingVertical: 10,
		marginRight: 1/30 * windowWidth,
		
	},

	receiverBubbleContent: {
		backgroundColor: '#b2b2b2',
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
	},

	bubbleSubtitle: {
		marginTop: 5
	},
});