import React from "react";
import "./styles.css"
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Button from "../button";


export const ErrorComponent = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  const exitHome = () => {
    signout();
    navigate("/login-register-app/");
  }

  return (
    <div className="error-component">
      <div className="error-content">
        <h2>404</h2>
        <p>
          This page doens't exist
        </p>
        <Button onClick={() => {exitHome()}} style={{ marginTop: '1rem', width: '200px' }}>Go to Sign in page</Button>
      </div>
    </div>
  );
}