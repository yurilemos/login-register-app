import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export const Index = () => {
  const { signed } = useAuth();
  const navigate = useNavigate();
  useEffect(()=>{
    
    if (signed) {
      navigate("/login-register-app/home")
    }
    else {
      navigate("/login-register-app/login")
    }
    
  },[navigate, signed]);
  return <div>Index</div>
}