import React, {useState, useEffect} from 'react';

import { 
	View,
	ScrollView,
	KeyboardAvoidingView,
	StyleSheet,
	TextInput,
	Dimensions 
} from 'react-native';

import { Button, ListItem } from 'react-native-elements';
import { FontAwesome, Ionicons } from '@expo/vector-icons'; 
import { KeyboardAccessoryView } from 'react-native-keyboard-accessory'

import socketIOClient from 'socket.io-client';

// Pensez à changer l'adresse ci-dessous avec votre IP locale !
let socket = socketIOClient("http://172.17.1.53:3000");
// 192.168.1.15 (home IP)
// 172.17.1.53 (LaCapsule IP)

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ChatScreen(props) {

  const [currentMessage, setCurrentMessage] = useState();
  const [listMessage, setListMessage] = useState([]);

  useEffect(() => {
    socket.on('sendMessageFromBack', (newMessageData)=> {
      setListMessage([...listMessage, newMessageData]);
    });
  }, [listMessage]);

  let listMessageItem = listMessage.map((messageData, i)=>{

    return (
      <ListItem key={i}>
        <ListItem.Content>
          <ListItem.Subtitle>{messageData}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  });

  return (

    <View style={styles.container}>
			<Button
				style={{marginRight: 1/1.2 * windowWidth, marginTop: 1/25 * windowHeight}}
				icon={
					<Ionicons
						name="arrow-back"
						size= {25}
					/>
				} 
				type="clear"
				onPress={() => { props.navigation.navigate('Conv') }}
			/>
			<ScrollView style={{flex:1}}>

				{listMessageItem}

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
							onChangeText={(messageData)=>setCurrentMessage(messageData)}
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
										color="#b2b2b2"
									/>
                } 
								style={styles.inputButton}
								type= 'clear'
								onPress={()=> {
									if(currentMessage) {
										socket.emit("sendMessage", currentMessage); 
										setCurrentMessage('');
									}
								}}
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
		backgroundColor: 'orange'
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
		color: "#b2b2b2",
    textAlignVertical: "top",
		backgroundColor: "#0c0c0c"
  },
  inputButton: {
    flexShrink: 1,
		paddingLeft: 5
  },
});