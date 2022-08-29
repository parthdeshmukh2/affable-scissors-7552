import axios from "axios";
import * as types from "./actionTypes";
import axios from "axios"

export const userLogin = (payload) => (dispatch)=>{
    dispatch({type:types.GET_LOGIN_REQUEST});

    axios.post('https://stark-lake-19402.herokuapp.com/user/login')
        
     
    
}