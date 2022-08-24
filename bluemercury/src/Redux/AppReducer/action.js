import * as types from "./actionTypes";
import axios from "axios"

export const getData = ()=> (dispatch)=> {
dispatch({type:types.GET_DATA_REQUEST});

axios.get("https://stark-lake-19402.herokuapp.com/makeUp")
.then((res)=> {
    dispatch({type:types.GET_DATA_SUCCESS, payload:res.data})
console.log(res.data)
}

    )
.catch((err)=> dispatch({type:types.GET_DATA_FAILURE, payload:err}));
}