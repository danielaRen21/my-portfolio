import React from "react";
import image from "../../img/programmer.svg";
import wave from "../../img/waveLanding.svg";
import linkedin from "../../img/linkedin.svg";
import github from "../../img/github.svg";
import gmail from "../../img/gmail.svg";

export default function FontPage() {
  return (
    <div>
      <div className="bg-light home">
        <div className="container font">
          <div className="presentation">
            <h1>
              Hi! I’m Daniela Renteria.
              <br />
              Frontend Developer
            </h1>
            <div className="media">
              <button type="button" class="btn btn-circle">
                <img src={linkedin} alt="gmail" className="" />
              </button>
              <button type="button" class="btn btn-circle">
                <img src={gmail} alt="gmail" className="" />
              </button>
              <button type="button" class="btn btn-circle">
                <img src={github} alt="gmail" className="" />
              </button>
            </div>
          </div>

          <img src={image} alt="programmer" />
        </div>
      </div>
      <div className="wave">
        <img className="w-100" src={wave} alt="" />
      </div>
    </div>
  );
}
