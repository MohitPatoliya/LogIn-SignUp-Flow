import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import PasswordInput from "../Common/PasswordInput";
import axios from "axios";

function ForgetPassword() {
  const navigate = useNavigate();
  const [error, setError] = useState("Forget Password");
  const [errorMessage, setErrorMessage] = useState("");
  const [allData, setAllData] = useState([]);
  const {
    watch,
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    axios.get("http://localhost:5000/getAllUsers").then((response) => {
      const storedArray = response.data.allUsers;
      setAllData(storedArray);
    });
  }, []);

  useEffect(() => {
    const changePasswordValue = watch("changePassword");
    const repeatPasswordValue = watch("repeatPassword");

    if (changePasswordValue === repeatPasswordValue) {
      setErrorMessage("");
    } else {
      setErrorMessage("Please enter matching passwords.");
    }
  }, [watch("changePassword"), watch("repeatPassword")]);

  const onSubmit = async (data) => {
    try {
      const response = await axios.put(
        "http://localhost:5000/update-password",
        data
      );
      console.log("API Response:", response.data);
      setError("Forget Password");
      reset();
      navigate("/firstpage");
    } catch (error) {
      console.error("API Error:", error.response.data);
      setError(error.response.data.error);
    }
  };

  const checkUsername = (username) => {
    const existingUser = allData.find((user) => user.name === username);
    if (existingUser) {
      setError("Forget Password");
    } else {
      setError("Valid Username.");
    }
  };

  return (
    <>
      <div className="body-one">
        <div className="ring" style={{ width: "550px", height: "550px" }}>
          <i style={{ "--clr": "#00ff0a" }}></i>
          <i style={{ "--clr": "#ff0057" }}></i>
          <i style={{ "--clr": "#fffd44" }}></i>
          <form className="login" onSubmit={handleSubmit(onSubmit)}>
            <h2>{error}</h2>
            <div className="inputBx">
              <input
                type="text"
                placeholder="Username"
                autoComplete="off"
                {...register("name", { required: true })}
                onChange={(e) => checkUsername(e.target.value)}
              />
            </div>
            <PasswordInput
              placeholder="Change Password"
              register={register}
              name="changePassword"
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
            <div className="links">
              <a href="/">Log In</a>
              <a href="/signup">Signup</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ForgetPassword;
