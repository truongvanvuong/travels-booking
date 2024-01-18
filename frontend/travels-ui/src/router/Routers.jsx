import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  Home,
  Login,
  Register,
  TourDetails,
  Tours,
  ThankYou,
  About,
} from "../page/index";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/tour/:id" element={<TourDetails />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Routers;
