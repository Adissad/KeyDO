export default function(userToken= '', action) {
 console.log("reducer", action);
    if(action.type == 'addToken') {
      return action.addToken;
    } else {
      return userToken;
    }
    
   }