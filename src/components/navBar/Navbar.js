import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
class NavBar extends React.Component {


  render() {
    return (
      <div className="navBar">
        <ul>
          <li>

            <img
              className="logo-left"
              src="https://www.apprentus.com/assets/owl/happy@2x.png"
              alt="anwar logo"
            />

          </li>
          <Link exact to="/">
            <li>Home</li>
          </Link>
          <Link to="/add">
            <li>Add</li>
          </Link>
          <Link to="/summary">
            <li>Summary</li>
          </Link>
        </ul>
      </div>
    );
  }
}
export default NavBar;
