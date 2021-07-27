/** 
* TODO : Fix KeyboardAvoidingView + Scrolling 
*/
import React, {useState, useEffect} from 'react';
import { View, ScrollView, KeyboardAvoidingView, StyleSheet, TextInput, Dimensions } from 'react-native';
import { Button, ListItem, Input } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome, Ionicons } from '@expo/vector-icons'; 
import { KeyboardAccessoryView } from 'react-native-keyboard-accessory'

import socketIOClient from 'socket.io-client';
import { FlatList } from 'react-native-gesture-handler';

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
			<Button
				style={{marginRight: 1/1.2 * windowWidth, marginTop: 1/25 * windowHeight}}
				icon={
					<Ionicons
						name="arrow-back"
						size= {25}
					/>
				} 
				type="clear"
				onPress={()=> { props.navigation.navigate('Conv') }}
			/>
			<ScrollView style={{flex:1}}>

				{listMessageItem}

			</ScrollView>

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
										color="#999999"
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
    borderColor: "#0c0c0c",
    padding: 10,
    fontSize: 16,
    textAlignVertical: "top",
		backgroundColor: "#0c0c0c"
  },
  inputButton: {
    flexShrink: 1,
		paddingLeft: 5
  },
});