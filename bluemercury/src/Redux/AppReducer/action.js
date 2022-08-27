import * as types from "./actionTypes";
import axios from "axios";
import { useEffect } from "react";



export const getData = () => (dispatch) => {
  dispatch({ type: types.GET_DATA_REQUEST });

  return axios.get("https://stark-lake-19402.herokuapp.com/newarrival")
    .then((res) => {
      dispatch({ type: types.GET_DATA_SUCCESS, payload: res.data });
      // console.log(res.data)
    })
    .catch((err) => dispatch({ type: types.GET_DATA_FAILURE, payload: err }));
};

// export const getSingleData = () => (dispatch) => {
//   dispatch({ type: types.GET_DATA_REQUEST });
//   axios
//     .get(`https://stark-lake-19402.herokuapp.com/makeUp`)
//     .then((res) => {
//       dispatch({ type: types.GET_DATA_SUCCESS, payload: res.data });

//       console.log(res.data);
//     })
//     .catch((err) => {
//       dispatch({ type: types.GET_DATA_FAILURE });

//       console.log(err);
//     });
// };

// export const addtowish = (currprod) => {
//   const { _id, Price, Image, Title } = currprod;
//   axios
//     .post(`http://localhost:8000/wishlist`, { id: _id, Price, Image, Title })
//     .then((res) => {
//       console.log(res.data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// export const modify = (currprod, price, quantity,data,setData) => {
//   const { _id } = currprod;
//   getProd(setData);
  
//     console.log("data",data)
//     if(data && data.find((elem) => elem.id === _id)){
//       getPatch(currprod,price,quantity);
//     }else{
//       axios
//       .post(`http://localhost:8000/products`, {
//         id: _id,
//         price: price,
//         quantity: quantity,
//       })
//       .then((res) => {
//         console.log( res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });}

  
//   console.log(_id, price, quantity);
  
// };

// const getProd = (setData) => {
//   axios
//     .get("http://localhost:8000/products")
//     .then((res) => {
//         console.log(res.data)
//       setData( res.data)
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };




// const getPatch = (currprod,price,quantity) => {
//    const {_id}=currprod;
//    console.log(_id,price,quantity)
//     axios
//       .patch("http://localhost:8000/products",{ id: _id,
//       price: price,
//       quantity: quantity})
//       .then((res) => {
//         console.log(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

