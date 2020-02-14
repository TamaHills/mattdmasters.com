import * as React from "react";
import { NavLink } from "react-router-dom";
import "./app.scss";

export function Header() {
  return (
    <header>
      <h1>Matt Masters.</h1>
      <h2>Fullstack Web Developer.</h2>
      <nav>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/lab">LAB</NavLink>
        <NavLink to="/gallery">GALLERY</NavLink>
      </nav>
    </header>
  );
}
