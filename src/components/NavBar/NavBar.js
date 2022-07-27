import React from "react";
import download from "../../img/download.svg";

const elements = ["Home", "Proyects", "Experience", "Contact"];
export const NavBar = () => {
  return (
    <div>
      <nav class="navbar  navbar-dark bg-primary">
        <ul class="navbar-nav flex-row">
          {elements.map((element) => (
            <>
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  {element}
                </a>
              </li>
            </>
          ))}
        </ul>
        <div>
          <button type="button" className="btn btn-danger">
            <img src={download} alt="download" className="" />
            Resume
          </button>
        </div>
      </nav>
    </div>
  );
};
