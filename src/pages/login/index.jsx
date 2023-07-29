import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import SigninSignupForm from "../../components/signinSignupForm";
import { useToast } from "../../contexts/toastProvider";

export const Login = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();
  const { showNotification } = useToast();


  const [ error, setError ] = useState("");

  const onSubmit = (data, event) => { 
    event.preventDefault();   

    const res = signin(data);

    if (res) {
      setError(res);
      return;
    }

    showNotification("User logged in successfully!")
    
    navigate("/login-register-app/home");
  };

  return (
    <div className="content">
      
      <SigninSignupForm type={1} onSubmit={onSubmit} onChangeRoute={()=>{navigate("/login-register-app/register");}} error={error} />
    </div>
  )
}