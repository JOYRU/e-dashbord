// import React from "react";
import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <ul className="nav-ul">
        <li>
          <Link to="">Products</Link>
        </li>
        <li>
          <Link to="/add">Add Products</Link>
        </li>
        <li>
          <Link to="/update">Update Products</Link>
        </li>
        <li>
          <Link to="/logout">logout</Link>
        </li>
        <li>
          <Link to="/profile">profile</Link>
        </li>
        <li>
          <Link to="/signup">SignUp</Link>
        </li>
      </ul>
      <h1>Header</h1>
    </div>
  );
};

export default Nav;
