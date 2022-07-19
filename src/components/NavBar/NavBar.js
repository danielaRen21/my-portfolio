import React from "react";
import "./style.scss";
const elements = ["Home", "Proyects", "Experience", "Contact"];
export const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-dark bg-primary">
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
        <button type="button" className="btn btn-primary">
          Resume
        </button>
      </nav>
    </div>
  );
};
