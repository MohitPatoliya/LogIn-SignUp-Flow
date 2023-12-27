import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./form.css";
import { useNavigate } from "react-router-dom";
import PasswordInput from "../Common/PasswordInput";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios.get("http://localhost:5000/getAllUsers").then((response) => {
      const storedArrayString = response.data.allUsers;
      const matchingUser = storedArrayString.find(
        (user) =>
          user.name === data.username && user.password === data.password
      );
      if (matchingUser) {
        setError(false);
        navigate("/firstpage");
      } else {
        setError(true);
        console.error("Invalid credentials. Please try again.");
      }
    });
  };

  return (
    <>
      <div className="body-one">
        <div className="ring">
          <i style={{ "--clr": "#00ff0a" }}></i>
          <i style={{ "--clr": "#ff0057" }}></i>
          <i style={{ "--clr": "#fffd44" }}></i>
          <form className="login" onSubmit={handleSubmit(onSubmit)}>
            <h2>{error ? "Invalid Credentials" : "Login"}</h2>
            <div className="inputBx">
              <input
                type="text"
                placeholder="Username"
                autoComplete={false}
                {...register("username", { required: true })}
              />
            </div>
            <PasswordInput
              placeholder="Password"
              register={register}
              name="password"
              required
            />
            <div className="inputBx">
              <button className="submit-btn" type="submit" onKeyDown={true}>
                Sign in
              </button>
            </div>
            <div className="links">
              <a href="/forgetpassword">Forget Password</a>
              <a href="/signup">Signup</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
