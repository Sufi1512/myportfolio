import React from 'react'
import './home.css'
import Typewriter from 'typewriter-effect';
const Home = () => {
  return (
   
      <>
      <div className="container-fluid home-container">
        <div className="container home-content">
          <h1>
          <Typewriter
  options={{
    strings: ["Hey! I'm Sufiyan Khan"," I'm a Developer","Flutter","Machine Learning",],
    autoStart: true,
    loop: true,
  }}
/>
          </h1>
          <h2>
          
          </h2>

        </div>
      </div>
      
      </>
    
  );
};

export default Home
