export default function(state = [], action){
    
    switch (action.type) {
        case "users_fetch":
            return action.payload;
        case "add_users":
            return action.payload;
        default:
            return state;
    }
}
