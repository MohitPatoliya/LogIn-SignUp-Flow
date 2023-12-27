import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./form.css";
import PasswordInput from "../Common/PasswordInput";
import axios from "axios";

function SignUp() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    watch,
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm();

  useEffect(() => {
    const passwordValue = watch("password");
    const repeatPasswordValue = watch("repeatPassword");

    if (passwordValue === repeatPasswordValue) {
      setErrorMessage("");
    } else {
      setErrorMessage("Please enter matching passwords.");
    }
  }, [watch("changePassword"), watch("repeatPassword")]);

  const onSubmit = (data) => {
    axios.get("http://localhost:5000/getAllUsers").then((response) => {
      const storedArray = response.data.allUsers;

      const matchingUser = storedArray.find(
        (user) => user.name === data.username
      );
      const matchingEmail = storedArray.find(
        (user) => user.email === data.email
      );

      if (matchingUser) {
        setErrorMessage("Username already exists");
      } else if (matchingEmail) {
        setErrorMessage("Email already exists");
      } else {
        axios
          .post("http://localhost:5000/register", {
            name: data.username,
            email: data.email,
            password: data.password,
            cpassword: data.repeatPassword,
          })
          .then((response) => {
            console.log(response);
            setError(false);
            setErrorMessage("");
            reset();
            navigate("/firstpage");
          })
          .catch((error) => {
            setError(true);
            console.error("Error registering user:", error);
          });
      }
    });
  };

  return (
    <>
      <div className="body-one">
        <div className="ring" style={{ width: "600px", height: "600px" }}>
          <i style={{ "--clr": "#00ff0a" }}></i>
          <i style={{ "--clr": "#ff0057" }}></i>
          <i style={{ "--clr": "#fffd44" }}></i>
          <form className="login" onSubmit={handleSubmit(onSubmit)}>
            <h2>
              {error ? "Please choose different credentials" : "Register"}
            </h2>
            <div className="inputBx">
              <input
                type="text"
                placeholder="Username"
                autoComplete="off"
                {...register("username", { required: true })}
              />
            </div>
            <div className="inputBx">
              <input
                type="email"
                placeholder="Email"
                autoComplete="off"
                name="email"
                {...register("email", { required: true })}
              />
            </div>
            <PasswordInput
              placeholder="Password"
              register={register}
              name="password"
              required
            />
            <PasswordInput
              placeholder="Repeat Password"
              register={register}
              name="repeatPassword"
              required
            />
            {errorMessage && (
              <p style={{ color: "white", marginTop: "-18px" }}>
                {errorMessage}
              </p>
            )}
            <div className="inputBx">
              <button className="submit-btn" type="submit" onKeyDown={true}>
                Next
              </button>
            </div>
            <div className="links link-center">
              <a href="/">Log In</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
