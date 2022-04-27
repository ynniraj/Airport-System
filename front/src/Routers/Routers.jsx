import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Home from "../Components/Home";
import CreateFlight from "../Components/CreateFlight";
const Routers = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/createflight" element={<CreateFlight />} />
      </Routes>
    </>
  );
};

export default Routers;
