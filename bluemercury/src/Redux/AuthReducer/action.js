import axios from "axios";
import * as types from "./actionTypes";


export const userLogin = (payload) => (dispatch)=>{
    console.log(payload)
    dispatch({type:types.GET_LOGIN_REQUEST})

    axios.post("https://thawing-wildwood-83730.herokuapp.com/user/login", payload)
    .then((res)=>{
        dispatch({type:types.GET_LOGIN_SUCCESS, payload:res.data.token})
        console.log("Login Success")
        return types.GET_LOGIN_SUCCESS
    } )
    .catch((err)=>  dispatch({type:types.GET_LOGIN_FAILURE, payload:err}));
}