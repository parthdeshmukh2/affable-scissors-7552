import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getData } from "../Redux/AppReducer/action";
import Sortbar from "../Components/Sortbar";
import Category from "../Components/Category";
import Filtering from "../Components/Filtering";

const NewArrival = () => {
  const dispatch = useDispatch();

  const product = useSelector((store) => store.AppReducer.productData);

  useEffect(() => {
    dispatch(getData());
  }, []);

  console.log(product);
  return (
    <div>
      <Sortbar />
      <Category />
      <Filtering />
      <div className="productsDiv">
      {product.map((elem) => (
        <div key={elem.id}>
          <img src={elem.Image} alt="image"/>
          <h4>{elem.Brand}</h4>
          <p>{elem.Title}</p>
          <p>{"$"+ elem.Price}</p>
          </div>
      ))}
      </div>
        
    </div>
  );
};

export default NewArrival;
