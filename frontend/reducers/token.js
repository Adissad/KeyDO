export default function(userToken= '', action) {
 
    if(action.type == 'addToken') {
      return action.addToken;
    } else {
      return userToken;
    }
    
   }