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
      <div>
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
            <Text title="Laboral Experience" paragraph={experiences[0]} />
          </div>
        </div>
      </div>
    </div>
  );
};
