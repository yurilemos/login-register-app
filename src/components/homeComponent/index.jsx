import React from "react";
import "./styles.css"
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Button from "../button";


export const HomeComporent = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  const exitHome = () => {
    signout();
    navigate("/login-register-app/");
  }

  return (
    <div className="home-component">
      <div className="home-content">
        <h2>Home</h2>
        <p>
          This is just a demo display... there is no content here. 
          Please return to the Sign-In page if you wish to try again or explore other available features.
        </p>
        <Button onClick={() => {exitHome()}} style={{ marginTop: '1rem', width: '100px' }}>Exit</Button>
      </div>
    </div>
  );
}