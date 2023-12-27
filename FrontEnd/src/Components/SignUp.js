import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./form.css";

function SignUp() {
  const navigate = useNavigate();
  const [array, setArray] = useState(() => {
    const storedArray = localStorage.getItem("formDataArray");
    return storedArray ? JSON.parse(storedArray) : [];
  });
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm();

  const onSubmit = (data) => {
    // Check if the username or password already exists in the array
    const isDuplicate = array.some((item) => item.username === data.username);
    if (isDuplicate) {
      setError(true);
    } else {
      const passwordsMatch = data.password === data.repeatPassword;
      if (!passwordsMatch) {
        setErrorMessage(
          isDuplicate
            ? "Duplicate username or password. Please choose different credentials."
            : "Passwords do not match. Please enter matching passwords."
        );
      } else {
        // Create a new array with the new form data and the existing data
        const newArray = [...array, data];
        // Update the state and store it in localStorage
        setArray(newArray);
        localStorage.setItem("formDataArray", JSON.stringify(newArray));
        // Reset error state and error message
        setError(false);
        setErrorMessage("");
        reset();
        navigate("/firstpage");
      }
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
                type="password"
                placeholder="Password"
                autoComplete="off"
                {...register("password", { required: true })}
              />
            </div>
            <div className="inputBx">
              <input
                type="password"
                placeholder="Repeat Password"
                autoComplete="off"
                {...register("repeatPassword", { required: true })}
              />
              {errorMessage && <p style={{ color: "white" }}>{errorMessage}</p>}
            </div>
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
