import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Register from "../Pages/Signup/Register";
import Login from "../Pages/Login/Login";

const AllRoutes = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AllRoutes;