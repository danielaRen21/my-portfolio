import React from "react";
import "./style.scss";
import FontPage from "./FontPage";
import wave2 from "../../img/wave2.svg";
import wave3 from "../../img/wave3.svg";

export const Home = () => {
  return (
    <div>
      <FontPage />
      <div className="container">
        <div>
          <h1>About me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            lectus ac vitae proin. Libero, iaculis nunc diam imperdiet turpis et
            senectus cras morbi. Dolor magna cras sed dignissim duis varius
            risus, odio mauris. Risus, sed non cras nullam nunc odio massa morbi
            sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
            risus libero aliquam ornare imperdiet amet, at. Massa adipiscing
            felis neque, commodo amet scelerisque. Nulla dignissim aliquet
            commodo fusce sed lacus. Varius fermentum massa ut nulla amet, sed
            porttitor ut tristique.
          </p>
        </div>
      </div>
      <div>
        <img className="w-100" src={wave2} alt="programmer" />
        <div className="bg-light">
          <h1>About me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            lectus ac vitae proin. Libero, iaculis nunc diam imperdiet turpis et
            senectus cras morbi. Dolor magna cras sed dignissim duis varius
            risus, odio mauris. Risus, sed non cras nullam nunc odio massa morbi
            sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
            risus libero aliquam ornare imperdiet amet, at. Massa adipiscing
            felis neque, commodo amet scelerisque. Nulla dignissim aliquet
            commodo fusce sed lacus. Varius fermentum massa ut nulla amet, sed
            porttitor ut tristique.
          </p>
        </div>
        <img className="w-100 wave3" src={wave3} alt="programmer" />
      </div>
    </div>
  );
};
