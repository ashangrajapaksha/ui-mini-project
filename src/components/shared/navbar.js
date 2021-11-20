import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BiWalk } from "react-icons/bi";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { NavLink , useHistory} from "react-router-dom";


function Navbar() {

  //let history = useHistory();

  return (
    <React.Fragment>
      <nav>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">
            <ul className="d-flex nav-link">
              <NavLink className="link-text-o" to="/operator-controls">
                <li className="operator-icon">
                  <BiWalk size={24} color="grey"/>
                  <p>operator controls</p>
                </li>
              </NavLink>

              <NavLink className="link-text-h" to="/">
                <li className="home-icon">
                  <AiFillHome size={24} color="grey" />
                  <p >Home</p>
                </li>
              </NavLink>  

              {/* <NavLink onClick={()=>history.goBack()}>
                <li className="home-icon">
                  <IoArrowBackCircleSharp size={32} color="grey" />
                  <p className="link-text">Home</p>
                </li>
              </NavLink>   */}
                
            </ul>
          </div>
          <div className="col-md-3"></div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
