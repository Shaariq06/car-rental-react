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
          <a href="/" className="nav-link">Contact Us</a>
      </div>
      <div className="left-nav">
        <a href="/"><img src="src/assets/account-icon.png" width="25px"></img></a>
      </div>
    </div>
  )
}

export default Nav