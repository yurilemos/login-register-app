import React from "react";
import "./styles.css"

const FormField = ({ label, type, placeholder, id, name, register, errors }) => {

  
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        {...register(name, { required: `${label} is required` })}
      />
      {errors[name] && <span className="error-message">{errors[name].message}</span>}
    </div>
  );
};

const ConfirmPasswordField = ({ label, type, placeholder, id, name, register, errors, password }) => {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        {...register(name, {
          required: `${label} is required`,
          validate: (value) => value === password || "Passwords do not match",
        })}
      />
      {errors[name] && <span className="error-message">{errors[name].message}</span>}
    </div>
  );
};

export { FormField, ConfirmPasswordField };

