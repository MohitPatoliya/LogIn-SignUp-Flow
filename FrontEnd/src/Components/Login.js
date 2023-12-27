import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./form.css";
import { useNavigate } from "react-router-dom";

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

    // Retrieve the formDataArray from localStorage
    const storedArrayString = localStorage.getItem("formDataArray");

    // Parse the retrieved string to get the array
    const storedArray = storedArrayString ? JSON.parse(storedArrayString) : [];

    // Assuming you have a condition to check against the value from formDataArray
    const matchingUser = storedArray.find(
      (user) =>
        user.username === data.username && user.password === data.password
    );

    if (matchingUser) {
      setError(false);
      // Navigate to "/firstpage" if a matching user is found
      navigate("/firstpage");
    } else {
      setError(true);
      // Handle other cases or show an error message
      console.error("Invalid credentials. Please try again.");
    }
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
            <div className="inputBx">
              <input
                type="password"
                autoComplete={false}
                placeholder="Password"
                {...register("password", { required: true })}
              />
            </div>
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
