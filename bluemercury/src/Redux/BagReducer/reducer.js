import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./action.type"

const initState={
    products : [],
    isLoading : false,
    isError : false,
}

export const reducer =(oldState=initState , action)=>{
    const {type , payload}=action

    switch(type) {
        case GET_PRODUCT_REQUEST:
            return{
                ...oldState,
                isLoading : true,
                isError : false,
            }

            case GET_PRODUCT_SUCCESS:
                return{
                    ...oldState,
                    products : [...payload],
                    isLoading : true,
                    isError : false,
                }

                case GET_PRODUCT_FAILURE:
                    return{
                        ...oldState,
                        isLoading : false,
                        isError : true,
                    }

            default :
            return oldState
            
    }
}