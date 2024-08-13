import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import HomePage from "../components/HomePage/HomePage";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";

const ApplicationRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default ApplicationRouter;
