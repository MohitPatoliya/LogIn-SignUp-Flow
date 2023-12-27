import React from "react";
import "./Christmas.css";
import { useNavigate } from "react-router-dom";

function Christmas() {
  const navigate = useNavigate();
  return (
    <>
      <div id="wrap">
        <h1>Merry Christmas!</h1>
        <div id="container">
          <div class="face front">
            <span class="hat"></span>
            <span class="woolly"></span>
            <span class="eyes first"></span>
            <span class="eyes second"></span>
            <span class="nose"></span>
            <span class="mustache first"></span>
            <span class="mustache second"></span>
          </div>
          <div class="face right">
            <span class="eyes first"></span>
            <span class="eyes second"></span>
            <span class="nose">
              <span class="light"></span>
            </span>
            <span class="blank first"></span>
            <span class="blank second"></span>
            <span class="horns first"></span>
            <span class="horns second"></span>
            <span class="horns third"></span>
            <span class="horns fourth"></span>
            <span class="horns fifth"></span>
            <span class="horns sixth"></span>
            <span class="mouth"></span>
            <span class="blusher first"></span>
            <span class="blusher second"></span>
          </div>
          <div class="face back">
            <span class="hat"></span>
            <span class="woolly"></span>
            <span class="eyes first"></span>
            <span class="eyes second"></span>
            <span class="nose"></span>
            <span class="mouth"></span>
            <span class="blusher first"></span>
            <span class="blusher second"></span>
            <span class="muffler">
              <span class="dotted first"></span>
              <span class="dotted second"></span>
              <span class="dotted third"></span>
              <span class="dotted fouth"></span>
              <span class="dotted fixth"></span>
              <span class="dotted sixth"></span>
              <span class="dotted seventh"></span>
              <span class="dotted eighth"></span>
              <span class="dotted ninth"></span>
            </span>
          </div>
          <div class="face left">
            <span class="hat"></span>
            <span class="woolly"></span>
            <span class="hair first"></span>
            <span class="hair second"></span>
            <span class="hair third"></span>
            <span class="ears first"></span>
            <span class="ears second"></span>
            <span class="eyes first"></span>
            <span class="eyes second"></span>
            <span class="nose"></span>
            <span class="mouth"></span>
            <span class="blusher first"></span>
            <span class="blusher second"></span>
          </div>
          <div class="face top">
            <span class="eyes first"></span>
            <span class="eyes second"></span>
            <span class="nose"></span>
            <span class="mouth"></span>
            <span class="blusher first"></span>
            <span class="blusher second"></span>
            <span class="buttons first"></span>
            <span class="buttons second"></span>
          </div>
          <div class="face bottom">
            <span class="hat"></span>
            <span class="woolly"></span>
            <span class="eyebrow first"></span>
            <span class="eyebrow second"></span>
            <span class="eyes first">
              <span class="circle"></span>
            </span>
            <span class="eyes second">
              <span class="circle"></span>
            </span>
            <span class="nose"></span>
            <span class="line"></span>
            <span class="mouth"></span>
          </div>
        </div>
      </div>
      <button className="button-btn-1" onClick={() => navigate("/")}>
        Log out
      </button>
      <button className="logout-btn" onClick={() => navigate("/firstpage")}>
        Back
      </button>
    </>
  );
}

export default Christmas;
