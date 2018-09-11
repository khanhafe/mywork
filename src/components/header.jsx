import React from "react";
import { Link } from "react-router-dom";

var styles = {
  color: "red",
  backgroundColor: "black",
  fontWeight: "bold",
  textDecoration: "none",
  marginLeft: "20px"
};

class Header extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">
          <a href="#" style={styles}>
            Home
          </a>
        </Link>
        <Link to="/service">
          <a href="#" style={styles}>
            Service
          </a>
        </Link>
      </div>
    );
  }
}
export default Header;
