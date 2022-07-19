import React from "react";

export const Text = ({ title = "", paragraph = "" }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{paragraph}</p>
    </div>
  );
};
