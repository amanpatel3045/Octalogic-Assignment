import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Register from "../Pages/Signup/Register";
import Login from "../Pages/Login/Login";
import HomePage from "../Pages/Home/HomePage";
import Overview from "../Pages/Overview";
import Courses from "../Pages/Courses";


const AllRoutes = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/home' element={<HomePage/>}/>
          <Route path='overview' element={<Overview/>}/>
            <Route path='courses' element={<Courses/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default AllRoutes;
