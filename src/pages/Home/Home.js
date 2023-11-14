import React from "react";
import "./home.css";
import Resume from "../../components/resources/files/Resume.pdf"
import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <>
      <div className="container-fluid home-container">
        <div className="container home-content">
          <h2>Hey!👋 I'm Sufiyan Khan</h2>
          <h1>
            <Typewriter
              options={{
                strings: ["Flutter Developer!", "Machine Learning Developer!"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="home-buttons">
            <button className="btn btn-hire">
              Hire Me
            </button>
            
            <a className="btn btn-cv" href={Resume} download='sufiyan.pdf'>My Resume</a>

            
              
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
