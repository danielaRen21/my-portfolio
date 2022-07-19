import React from "react";
import "./style.scss";
import FontPage from "./FontPage";
import { Sections } from "./Sections";

export const Home = () => {
  return (
    <div>
      <FontPage />
      <Sections />
    </div>
  );
};
