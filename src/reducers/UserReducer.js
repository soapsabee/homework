export default function(state = [], action){
    console.log("state: " + state);
    console.log("action: " + JSON.stringify(action));
    
    switch (action.type) {
        case "users_fetch":
            return action.payload;
        default:
            return state;
    }
}
