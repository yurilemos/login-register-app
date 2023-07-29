import React from "react";
import "./styles.css"
import { useForm } from "react-hook-form";
import Button from "../button";
import { ConfirmPasswordField, FormField } from "../formField";

const SigninSignupForm = ({ type, onSubmit, onChangeRoute, error }) => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  return (
    <div className="login-content">
        <h2>{type === 1 ? 'Sign in' : 'Sign up'}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormField
            label="Email"
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
            register={register}
            errors={errors}
          />

          <FormField
            label="Password"
            type="password"
            placeholder="********"
            id="password"
            name="password"
            register={register}
            errors={errors}
          />

          {type === 2 && 
            <ConfirmPasswordField
              label="Confirm password"
              type="password"
              placeholder="Confirm your password"
              id="confirmPassword"
              name="confirmPassword"
              register={register}
              errors={errors}
              password={getValues("password")}
            />
          }

          {error && <span className="error-message">{error}</span>}

          <Button type="submit" style={{ marginTop:'1rem' }}>{type === 1 ? 'Sign in' : 'Sign up'}</Button>
        </form>
        <Button onClick={onChangeRoute}>{type===1 ? "Don't have an account? Sign up" : "Already have an account? Sign in"}</Button>
      </div>
  );
};

export default SigninSignupForm;
