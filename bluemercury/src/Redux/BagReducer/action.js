import { DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAILURE, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS } from "./action.type"

export const getproductRequest = ()=>{
    return{
        type : GET_PRODUCT_REQUEST
    }
}

export const getproductSuccess = (payload)=>{
    return{
        type : GET_PRODUCT_SUCCESS , payload
    }
}

export const getproductFailure= ()=>{
    return{
        type : GET_PRODUCT_FAILURE
    }
}


export const deleteProductReq=()=>{
    return{
        type:DELETE_PRODUCT_REQUEST
    }
}

export const deleteProductSuccess=()=>{
    return{
        type:DELETE_PRODUCT_SUCCESS
    }
}

export const deleteProductFail=()=>{
    return{
        type:DELETE_PRODUCT_FAILURE
    }
}



export const UpdateProductReq=()=>{
    return{
        type:UPDATE_PRODUCT_REQUEST
    }
}

export const UpdateProductSuccess=()=>{
    return{
        type:UPDATE_PRODUCT_SUCCESS
    }
}

export const UpdateProductFail=()=>{
    return{
        type:UPDATE_PRODUCT_FAILURE
    }
}