import * as React from "react";
import { Route } from "react-router-dom";
import { Header } from "./Header";
import "./app.scss";

export default function App() {
  return (
    <div id="App">
      <Header />
      <Route path="/" component={Home} exact />
      <footer>copyright 2020</footer>
    </div>
  );
}

function Home() {
  return (
    <div className="container">
      <div id="skills">
        <div className="comment"># full stack web developer</div>
        <div className="comment"># dallas, tx</div>
        <div className="comment"># FREELANCE</div>
        <div className="comment"># SEEKING EMPLOYMENT</div>
        <br />

        <div className="comment"># skills</div>
        <Func name="languages">
          <ul>
            <li>Javascript / TypeScript</li>
            <li />
            <li>Python</li>
            <li>CSS / SCSS / LESS</li>
            <li>SQL</li>
            <li>HTML</li>
          </ul>
        </Func>
        <Func name="frameworks">
          <ul>
            <li>Node / Express</li>
            <li>Flask</li>
            <li>React</li>
            <li>Django </li>
          </ul>
        </Func>

        <Func name="other">
          <ul>
            <li>Linux</li>
            <li>BASH / ZSH</li>
            <li>Webpack / Parcel / Rollup</li>
          </ul>
        </Func>
      </div>
    </div>
  );
}

interface FuncProps {
  name: string;
  children: React.ReactNode;
}

function Func({ name, children }: FuncProps) {
  return (
    <>
      <span className="func">
        <span className="const">const</span>
        <span className="name">{name}</span>
        <span className="equals">{"="}</span>
        <span className="parens">{"()"}</span>
        <span className="arrow">{"=>"}</span>
        <span className="bracket">{"{"}</span>
      </span>
      {children}
      <span className="bracket">{"}"}</span>
    </>
  );
}
