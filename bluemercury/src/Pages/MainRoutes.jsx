import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Login from "./Login";
import NewArrival from "./NewArrival";
import SignUp from "./SignUp";
import SingleProduct from "./SingleProduct";
import Wishlist from "../Pages/Wishlist";
import Checkout from "../Pages/Checkout";
import BagYaEmpty from "./BagYaEmpty";
import MakeUp from "./MakeUp";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/newarrival" element={<NewArrival />} />
      <Route path="/product/:id" element={<SingleProduct />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path='/wishlist'  element={<Wishlist/>}  />
      <Route path='/checkout'  element={<Checkout/>}  />
      <Route path='/cart'  element={<BagYaEmpty/>}  />
      <Route  path='/makeup' element={<MakeUp/>} />
    </Routes>
  );
};

export default MainRoutes;
