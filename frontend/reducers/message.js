export default function(messageList = [], action){

	if(action.type == 'saveMessage') {

			let messageListCopy = [...messageList];
			messageListCopy.push(action.currentMessage);
			return messageListCopy;

	} else {
			return messageList;
	}
};