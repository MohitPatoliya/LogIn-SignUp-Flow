import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordInput = ({ type, placeholder, register, name, required }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="inputBx">
      <input
        autoComplete="off"
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        {...register(name, { required })}
        style={{ paddingRight: "2.5em" }} // Adjust padding to accommodate the icon
      />
      <div
        className="password-icon"
        onClick={togglePasswordVisibility}
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          cursor: "pointer",
          background: "linear-gradient(45deg, #ff357a, #fff172)",
          padding: "16px",
          borderRadius: "0px 25px 25px 0px", // Adjust border-radius for rounded corners
        }}
      >
        {showPassword ? <FaEyeSlash color="#fff" /> : <FaEye color="#fff" />}
      </div>
    </div>
  );
};
export default PasswordInput;
