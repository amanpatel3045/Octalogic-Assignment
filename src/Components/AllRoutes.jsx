import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Register from "../Pages/Signup/Register";
import Login from "../Pages/Login/Login";
import HomePage from "../Pages/Home/HomePage";


const AllRoutes = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/home' element={<HomePage/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default AllRoutes;
