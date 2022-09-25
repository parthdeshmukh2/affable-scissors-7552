import * as types from "./actionTypes";

const initialState = {
  isAuth: false,
  isLoading: false,
  isError: false,
  token:""

}

export const reducer = (state = initialState, action)=>{
  const {type, payload} = action;

  switch(type){
    case types.GET_LOGIN_REQUEST:
    return {...state, isLoading:true, isError:false}

    case types.GET_LOGIN_SUCCESS:
      return {...state, isLoading:false, isError:false, isAuth:true, token:payload}

      case types.GET_LOGIN_FAILURE:
        return {...state, isLoading:false, isError:true}
      
      default: return state;
  }
}