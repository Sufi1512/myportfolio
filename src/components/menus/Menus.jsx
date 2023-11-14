import React from "react";
import "./Menus.css";
import profilePic from "../resources/Images/profile-pic.jpg";
import {
  FcAbout,
 
  FcBusinessContact,
  FcCollaboration,
  FcCommandLine,
  FcHome,
  FcPositiveDynamic,
  FcReading,

  FcStatistics,
} from "react-icons/fc";
function Menus({ toggle }) {
  return (
    <>
      {toggle ? (
        <>
          <div className="nav-profile-pic">
            <img src={profilePic} alt="profile-pic" />

            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link" title="Home">
                  <FcHome size={30} />
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link" title="About">
                  <FcAbout size={30} />
                </div>
              </div>

              <div className="nav-item">
                <div className="nav-link" title="Education">
                  <FcReading size={30} />
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link" title="Experience">
                  <FcPositiveDynamic size={30} />
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link" title="Tech Stack">
                  <FcStatistics size={30} />
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link" title="Projects">
                  <FcCommandLine size={30} />
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link" title="Testimonials">
                  <FcCollaboration size={30} />
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link" title="Contact">
                  <FcBusinessContact size={30} />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nav-profile-pic nav-profile-toggle">
            <img src={profilePic} alt="profile-pic" />
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <FcHome />
                  Home
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <FcAbout />
                  About
                </div>
              </div>

              <div className="nav-item">
                <div className="nav-link">
                  <FcReading />
                  Education
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <FcPositiveDynamic />
                  Experience
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <FcStatistics />
                  Tech Stack
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <FcCommandLine />
                  Projects
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <FcCollaboration />
                  Testimonials
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <FcBusinessContact />
                  Contact
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Menus;
