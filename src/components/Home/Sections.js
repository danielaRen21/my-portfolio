import React from "react";

import wave2 from "../../img/wave2.svg";
import wave3 from "../../img/wave3.svg";
import { Text } from "../Text";
import { experiences, paragraphs, proyects } from "./Mock";

export const Sections = () => {
  return (
    <div>
      <div className="container">
        <div>
          <Text title="About me" paragraph={paragraphs[0]} />
        </div>
      </div>
      <div className="section-proyects">
        <img className="w-100" src={wave2} alt="programmer" />
        <div className="bg-light">
          <div className="container">
            <div className="profile">
              <Text proyects={proyects} />
            </div>
          </div>
        </div>
        <img className="w-100" src={wave3} alt="programmer" />
      </div>
      <div>
        <div className="container">
          <div>
            <Text title="Laboral Experience" list={experiences} />
          </div>
        </div>
      </div>
      <div className="bg-light">
        <div className="container info">
          <div>
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
              alt="hola"
              className="w-50"
            />
          </div>

          <ul>
            {experiences.map((experience) => (
              <li>{experience}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
