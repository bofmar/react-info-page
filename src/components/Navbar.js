import React from "react";
import logo from '../logo.svg';

export default function Navbar() {
  console.log(logo);
  return (
    <nav>
      <section className='logo-section'>
        <img src={logo} className='logo' />
        <h3>ReactFacts</h3>
      </section>
      <h4>React Course - Project 1</h4>
    </nav>
  );
}
