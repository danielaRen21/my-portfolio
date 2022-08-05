import React from "react";
import Carousel from "react-bootstrap/Carousel";
import proyectImg from "../img/proyect.svg";

export const Text = ({ title = "", paragraph = "", proyects, list }) => {
  return (
    <>
      {proyects ? (
        <>
          <Carousel>
            {proyects.map((proyect) => (
              <Carousel.Item interval={70000} className="carousel">
                <img
                  className="d-block w-20 container"
                  src={proyectImg}
                  alt={proyect.title}
                />
                <Carousel.Caption>
                  <h3>{proyect.title}</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </>
      ) : (
        <div>
          <h1>{title}</h1>
          {list ? (
            <div className="experience-list">
              <ul>
                {list.map((experience) => (
                  <li>{experience}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p>{paragraph}</p>
          )}
        </div>
      )}
    </>
  );
};
