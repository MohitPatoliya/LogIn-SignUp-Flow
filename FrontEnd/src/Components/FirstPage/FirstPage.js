import React from "react";
import "./firstPage.css";
import { useNavigate } from "react-router-dom";

function FirstPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="body-two">
        <div className="christmas-message">
          <h1>Well Come</h1>
          <br />
        </div>
        <button className="logout-btn" onClick={() => navigate("/christmas")}>
          Christmas Page
        </button>
      </div>
    </>
  );
}

export default FirstPage;
