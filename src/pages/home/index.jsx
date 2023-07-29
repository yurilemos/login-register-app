import React from "react";
import Button from "../../components/button";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  const exitHome = () => {
    signout();
    navigate("/login-register-app/login");
  }

  return (
    <div>Home
      <Button onClick={() => {exitHome()}}>Sair</Button>
    </div>
  )
}