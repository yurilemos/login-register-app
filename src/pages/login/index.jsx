import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import SigninSignupForm from "../../components/signinSignupForm";

export const Login = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();


  const [ error, setError ] = useState("");

  const onSubmit = (data, event) => { 
    event.preventDefault();   

    const res = signin(data);

    if (res) {
      setError(res);
      return;
    }

    alert("user found successfully");
    navigate("/login-register-app/home");
  };

  return (
    <div className="content">
      
      <SigninSignupForm type={1} onSubmit={onSubmit} onChangeRoute={()=>{navigate("/login-register-app/register");}} error={error} />
    </div>
  )
}