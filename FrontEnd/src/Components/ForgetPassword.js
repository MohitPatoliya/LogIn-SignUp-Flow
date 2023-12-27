import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function ForgetPassword() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    // formState: { isValid },
  } = useForm();

  const onSubmit = (data) => {
    // Retrieve the existing user data from LocalStorage
    const storedUsers = JSON.parse(localStorage.getItem("formDataArray")) || [];

    // Find the user by the provided username
    const userToUpdate = storedUsers.find(
      (user) => user.username === data.username
    );

    if (userToUpdate) {
      // Update the user's password
      userToUpdate.password = data.changePassword;
      userToUpdate.repeatPassword = data.repeatPassword;
      // Save the updated user data back to LocalStorage
      localStorage.setItem("formDataArray", JSON.stringify(storedUsers));
      console.log("Password updated successfully.");
      setError(false);
      reset();
      navigate("/firstpage");
    } else {
      setError(true);
      console.error("User not found.");
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
            <h2>{error ? "User not found" : "Forget Password"}</h2>
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
                autoComplete="off"
                placeholder="Change Password"
                {...register("changePassword", { required: true })}
              />
            </div>
            <div className="inputBx">
              <input
                type="password"
                placeholder="Repeat Password"
                autoComplete="off"
                {...register("repeatPassword", { required: true })}
              />
            </div>
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
