import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import SigninSignupForm from "../../components/signinSignupForm";

export const Register = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [ error, setError ] = useState("");

  const onSubmit = (data, event) => { 
    event.preventDefault();   

    const res = signup(data);

    if (res) {
      setError(res);
      return;
    }

    alert("user created successfully");
    navigate("/login-register-app/login");
  };

  return (
    <div className="content">
      <SigninSignupForm type={2} onSubmit={onSubmit} onChangeRoute={()=>{navigate("/login-register-app/login");}} error={error} />
    </div>
  )
}