import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Login from "./Login";
import NewArrival from "./NewArrival";
import SignUp from "./SignUp";
import SingleProduct from "./SingleProduct";
import Wishlist from "../Pages/Wishlist";
import Checkout from "../Pages/Checkout";
import Payments from "./Payments";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/newarrival" element={<NewArrival />} />
      <Route path="/product/:id" element={<SingleProduct />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path='/account'  element={<Wishlist/>}  />
      <Route path='/payments'  element={<Payments/>}  />
        <Route path='/checkout'  element={<Checkout/>}  />
    </Routes>
  );
};

export default MainRoutes;
