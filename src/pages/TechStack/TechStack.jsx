import React from "react";
import "./TechStack.css";
import { TechStackList } from "../../utils/TechStackList";

const TechStack = () => {
    return (
      <>
        <div className="container techstack">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Technologies Stack</h2>
          <hr />
  
          <p className="col-12 mt-3 mb-1 text-center">
            👉 Including programming languages, frameworks, libraries, databases,
            front-end and back-end tools, and APIs.
          </p>
  
          <div className="row">
            {TechStackList.map((tech) => (
              <div className="col-md-3" key={tech._id}>
                <div className="card m-2">
                  <div className="card-content">
                    <div className="card-body text-center">
                      <div className="media d-flex justify-content-center align-items-center">
                        <div>
                          <tech.icon className="tech-icon" size={50} />
                        </div>
                        <div className="media-body">
                          <h5>{tech.name}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };
  
  export default TechStack;
