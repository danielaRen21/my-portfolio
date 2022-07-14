import React from "react";
import "./style.scss";

export const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-dark bg-primary">
        <ul class="navbar-nav flex-row">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Features
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Pricing
            </a>
          </li>
        </ul>
        <button type="button" className="btn btn-primary">
          Resume
        </button>
      </nav>
    </div>
  );
};
