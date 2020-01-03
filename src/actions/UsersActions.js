import axios from 'axios'


export const usersFetch = () => {
    return dispatch => {
        axios.get("http://localhost:3001/users").then(
            res => {
                console.log("res: "+ JSON.stringify(res.data));
                
                dispatch({ type: "users_fetch", payload: res.data });
            }
        )
    }
}

export const addUsers = (data) => {
    return dispatch => {
        axios.post("http://localhost:3001/users", data).then(
            res => {
               
                axios.get("http://localhost:3001/users").then(
                    res => {
                        dispatch({ type: "users_fetch", payload: res.data });
                    }
                )
            }
        )
    }
}


export const deleteUser = id => {
    return dispatch => {
        axios.delete(`http://localhost:3001/users/${id}`).then(
            res => {
                axios.get("http://localhost:3001/users").then(
                    res => {
                        dispatch({ type: "users_fetch", payload: res.data });
                    }
                )
            }
        )
    }
}