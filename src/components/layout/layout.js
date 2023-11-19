import React, { useState } from "react";
import Home from "../../pages/Home/Home";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import "./Layout.css";
import Menus from "../menus/Menus";

const Layout = () => {
  const [toggle, setToggle] = useState(true);

  // Change toggle state
  const togglehandle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="sidebar-section">
      {" "}
      <div className={`layout ${toggle ? "sidebar-toggle" : ""}`}>
        <div className={toggle ? "sidebar" : "sidebar sidebar-toggle"}>
          <div className="sidebar-toggleIo">
            <Menus toggle={toggle} />
            <p className ="sidebar-toggleIo-menu" onClick={togglehandle}>
              {toggle ? (
                <AiOutlineDoubleRight size={30} />
              ) : (
                <AiOutlineDoubleLeft size={30} />
              )}
            </p>
          </div>
          <div className="sidebar-content">{/* Content of the sidebar */}</div>
        </div>
        <div className="content-container">
          <Home />
        </div>
      </div>
    </div>
  );
};

export default Layout;
