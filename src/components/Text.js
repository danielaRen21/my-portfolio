import React from "react";

export const Text = ({ title = "", paragraph = "", proyects, list }) => {
  return (
    <>
      {proyects ? (
        <>
          {proyects.map((proyect) => (
            <div>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                alt={proyect.title}
                className=""
              />
              <h1>{proyect.title}</h1>
              <p>{proyect.text}</p>
            </div>
          ))}
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
