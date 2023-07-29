import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import SigninSignupForm from "../../components/signinSignupForm";
import { useToast } from "../../contexts/toastProvider";

export const Register = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const { showNotification } = useToast();

  const [ error, setError ] = useState("");

  const onSubmit = (data, event) => { 
    event.preventDefault();   

    const res = signup(data);

    if (res) {
      setError(res);
      return;
    }
    showNotification("User created successfully");
    
    navigate("/login-register-app/");
  };

  return (
    <div className="content">
      <SigninSignupForm type={2} onSubmit={onSubmit} onChangeRoute={()=>{navigate("/login-register-app/");}} error={error} />
    </div>
  )
}