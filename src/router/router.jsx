import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { Register } from "../pages/register";
import { Login } from "../pages/login";
import { Index } from "../pages/index";
import useAuth from "../hooks/useAuth";


const Private = ({ Item })=>{
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Login />;
}
export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login-register-app" element={<Index />} />
        <Route path="/login-register-app/home" element={<Private Item={Home} />} />
        <Route path="/login-register-app/login" element={<Login />} />
        <Route path="/login-register-app/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};