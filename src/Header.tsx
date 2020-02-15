import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./app.scss";

export function Header() {
  let [clicks, setClicks] = React.useState(0);
  let history = useHistory();
  function click() {
    if (clicks < 5) {
      setClicks(clicks + 1);
    } else {
      history.push("/secret");
      setClicks(0);
    }
  }
  return (
    <header>
      <h1 onClick={click}>Matt Masters.</h1>
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
