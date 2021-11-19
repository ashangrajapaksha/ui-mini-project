import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BiWalk } from "react-icons/bi";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">
            <ul className="d-flex nav-link">

              <NavLink to="/operator-controls">
                <li className="operator-icon">
                  <BiWalk size={32} color="grey"/>
                  <p className="link-text">operator controls</p>
                </li>
              </NavLink>

              <NavLink to="/">
                <li className="home-icon">
                  <AiFillHome size={32} color="grey" />
                  <p className="link-text">Home</p>
                </li>
              </NavLink>  
                
            </ul>
          </div>
          <div className="col-md-3"></div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
