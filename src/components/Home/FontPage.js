import React from "react";
import image from "../../img/programmer.svg";
import wave from "../../img/waveLanding.svg";

export default function FontPage() {
  return (
    <div>
      <div className="bg-light home">
        <div className="container font">
          <h1>
            Hi! I’m Daniela Renteria.{}
            <br />
            Fontend Developer
          </h1>
          <img src={image} alt="programmer" />
        </div>
      </div>
      <div className="wave">
        <img className="w-100" src={wave} alt="" />
      </div>
    </div>
  );
}
