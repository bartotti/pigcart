import React, { useState } from "react";

const NavBar = () => {
  const [isAboutDropDownOpen, setIsAboutDropDownOpen] = useState(false);
  const toggleAboutDropDown = () => {
    setIsAboutDropDownOpen(!isAboutDropDownOpen);
  };

  return (
    <nav>
      <img src="houses.png" className="main-logo"></img>
      <h1 className="company-name">Nimbus Solutions</h1>
      <button className="about-btn" onClick={toggleAboutDropDown}>
        {isAboutDropDownOpen ? "Close About" : "About"}
      </button>
      {isAboutDropDownOpen && (
        <ul className="about-dropdown">
          <li>Phone: (555) 123-4567</li>
          <li>Address: 123 Main St, Anytown, USA</li>
          <li>Store Hours:</li>
          <li>Monday-Friday: 9:00am-5:00pm</li>
          <li>Saturday: 10:00am-3:00pm</li>
          <li>Sunday: Closed</li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
