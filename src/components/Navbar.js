import React from "react";
import logo from '../logo.svg';

export default function Navbar(props) {
  return (
    <nav className={props.darkMode ? 'dark' : ''}>
      <section className='logo-section'>
        <img src={logo} className='logo' />
        <h3>ReactFacts</h3>
      </section>
      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div
          className="toggler--slider"
          onClick={props.toggleDarkMode}
        >
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  );
}
