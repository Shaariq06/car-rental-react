// import { useState } from "react";
import "./nav.css";


const Nav = () => {
  return (
    <div className="nav-container">
      <div className="brand">
        <a href="/">
            <img src="src/assets/logo.png" width="200px"></img>
        </a>
      </div>
      <div className="right-nav">
          <a href="/" className="nav-link">Home</a>
          <a href="/" className="nav-link">Service</a>
          <a href="/" className="nav-link">Fleet</a>
          <a href="/" className="nav-link">About Us</a>
      </div>
      <a className="rent-button">Rent a Car</a>
      <a className="contact-us-button">Contact Us</a>
      <a href="/"><img src="src/assets/account-icon.png" width="38px"></img></a>
    </div>
  )
}

export default Nav