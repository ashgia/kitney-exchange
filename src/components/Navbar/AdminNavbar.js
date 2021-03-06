import React, { Component } from "react";
import "./Navbar.css";
// import care from "../../images/care.png";
import { Link } from "react-router-dom";

class Navbar extends Component {
  //will be updating this
  render() {
    return (
      <div className="form-navbar">
        <div className="navbar-icon">{/* <img src={care} alt="icon" /> */}</div>
        <div className="home-link">
          <Link id="link-dec" to="/">
            <div className="nav-homelink">Kitney Exchange</div>
          </Link><br/>
          <Link id="link-dec" to="/matched">
                <div className="nav-homelink">
                Matched Batches
                </div>
          </Link><br/>
          <Link id="link-dec" to="/hospitals">
                <div className="nav-homelink">
                Manage Hospitals
                </div>
          </Link>
          <Link id="link-dec" to="/unmatched">
                <div className="nav-homelink">
                Status Page
                </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;