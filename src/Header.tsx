import React from "react";
import { NavLink } from "react-router-dom";
import "./app.scss";

export function Header() {
  return (
    <header>
      <h1>Matt Masters.</h1>
      <nav>
        <NavTab to="/">{["HOME", "HELLO WORLD"]}</NavTab>
        <NavTab to="/lab">{["LAB", "CODE Experiments"]}</NavTab>
        <NavTab to="/gallery">{["GALLERY", "SELECTED PROJECTS"]}</NavTab>
      </nav>
    </header>
  );
}

interface TabProps {
  children: string[];
  to: string;
}

function NavTab({ children, to }: TabProps) {
  let [index, setIndex] = React.useState(0);
  function mouseEnter() {
    setIndex(1);
  }
  function mouseLeave() {
    setIndex(0);
  }

  return (
    <NavLink onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} to={to}>
      {children[index]}
    </NavLink>
  );
}
