import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getData } from "../Redux/AppReducer/action";
import Sortbar from "../Components/Sortbar";
import FilterOptions from "../Components/FilterOptions";
import Sidebar from "../Components/Sidebar";
import { Flex } from "@chakra-ui/react";

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
     

      <Flex>
      <Sidebar/>
        <div className="productsDiv">
          {product.map((elem) => (
            <div key={elem.id} className="productCard">
              <img src={elem.Image} alt="image" />
             <h4>{elem.Brand}</h4>
              <p>{elem.Title}</p>
              <p>{"$ " + elem.Price}</p>
            </div>
          ))}
        </div>
      </Flex>
    </div>
  );
};

export default NewArrival;
