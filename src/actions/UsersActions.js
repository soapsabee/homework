import axios from 'axios'


export const usersFetch = () => {
    return dispatch => {
        axios.get("http://localhost:3000/users").then(
            res => {
                console.log("res: "+ JSON.stringify(res.data));
                
                dispatch({ type: "users_fetch", payload: res.data });
            }
        )
    }
}

export const addUsers = (data) => {
    return dispatch => {
        axios.post("http://localhost:3000/users", data).then(
            res => {
               
                
                dispatch({ type: "add_users", payload: 1234 });
            }
        )
    }
}