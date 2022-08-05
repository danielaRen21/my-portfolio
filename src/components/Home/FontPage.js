import React from "react";
import image from "../../img/programmer.svg";
import waves from "../../img/waves.svg";
import wave3 from "../../img/wave3.svg";
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
          <div className="image-container d-md-flex ">
            <img src={image} alt="programmer" className=" " />
          </div>
        </div>
      </div>
      <div className="wave d-md-flex ">
        <img className="d-none d-sm-flex w-100" src={waves} alt="" />
        <img className="d-sm-none d-flex w-100 pt-4" src={wave3} alt="" />
      </div>
    </div>
  );
}
