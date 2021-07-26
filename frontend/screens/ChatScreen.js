/** 
* TODO : Fix KeyboardAvoidingView + Scrolling 
*/
import React, {useState, useEffect} from 'react';
import { View, ScrollView, KeyboardAvoidingView, StyleSheet, TextInput } from 'react-native';
import { Button, ListItem, Input } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome } from '@expo/vector-icons'; 
import { KeyboardAccessoryView } from 'react-native-keyboard-accessory'

import socketIOClient from 'socket.io-client';

// Pensez à changer l'adresse ci-dessous avec votre IP locale !
let socket = socketIOClient("http://172.17.1.53:3000");
// 192.168.1.15 (home IP)
// 172.17.1.53 (LaCapsule IP)

export default function ChatScreen(props) {
  
  const [currentMessage, setCurrentMessage] = useState();
  const [listMessage, setListMessage] = useState([]);

  useEffect(() => { 
    socket.on('sendMessageToAll', (newMessageData)=> {
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

			<ScrollView style={{flex:1, marginTop: 50}}>

				{listMessageItem}

			</ScrollView >

			{/* <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}> */}

			<KeyboardAccessoryView alwaysVisible={true} androidAdjustResize>
				{({ isKeyboardVisible }) => (
					<View style={styles.inputView}>
						<TextInput
							placeholder="Message"
							onChangeText={(messageData)=>setCurrentMessage(messageData)}
							value={currentMessage}
							underlineColorAndroid="transparent"
							style={styles.input}
							multiline={true}
						/>
						{isKeyboardVisible && (
							<Button
								icon={
									<FontAwesome
									name="send-o"
									size={20}
									color="#000000"
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
			{/* </KeyboardAvoidingView> */}
		</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputView: {
		paddingTop: '2%',
		paddingBottom: '2%',
		paddingLeft: '2%',
    paddingRight: '5%',
    flexDirection: 'row',
		alignContent: 'center',
    justifyContent: 'space-around',
  },
  input: {
    flexGrow: 1,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#808080",
    padding: 10,
    fontSize: 16,
    marginRight: 10,
    textAlignVertical: "top",
  },
  inputButton: {
    flexShrink: 1,
  },
});