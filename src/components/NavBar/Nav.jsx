import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul id="nav">
        <li>
          <Link to={"/"}>COUNTER</Link>
        </li>
        <li>
          <Link to={"/todo"}>TODO</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
