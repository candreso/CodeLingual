import styled from "styled-components";
import "./ChloeHeader.css";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Drawer, List } from "@material-ui/core";
import { HamburgerSpin } from "react-animated-burgers";

const StyledSpin = styled(HamburgerSpin)`
  outline: none;
`;

const BrandLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const ChloeHeader = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const history = useHistory();

  const toggleMenu = () => {
    setHamburgerOpen(!hamburgerOpen);
    var elems = document.querySelectorAll(".sidebar-item");
    var i;
    for (i = 0; i < elems.length; ++i) {
      elems[i].classList.toggle("active");
    }
  };

  // creating my own routing system bruh
  const redirect = (e) => {
    const link = e.target.innerHTML;

    if (link === "Sign Up" || link === "Sign In" || link === "About Us") {
      switch (link) {
        case "Sign Up":
          history.push("/auth?type=sign-up");
          break;
        case "Sign In":
          history.push("/auth?type=sign-in");
          break;
        case "About Us":
          history.push("/about-us");
      }
      setHamburgerOpen(false);
    }
  };

  return (
    <div className="header-wrap">
      <BrandLink to="/">
        <h2 className="header-brand">CodeLingual</h2>
      </BrandLink>
      <div className="empty-div"></div>
      <StyledSpin onClick={toggleMenu} isActive={hamburgerOpen} />
      <Drawer anchor="left" open={hamburgerOpen} onClose={toggleMenu}>
        <div className="drawer-buttons dum" onClick={redirect}>
          <ul>
            <li className="sidebar-item">
              <a href="/" className="sidebar-anchor">
                <white>Item 1</white>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="/" className="sidebar-anchor">
                <white>Item 2</white>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="/" className="sidebar-anchor">
                Item 3
              </a>
            </li>
            <li className="sidebar-item">
              <a href="/" className="sidebar-anchor">
                Item 4
              </a>
            </li>
          </ul>
        </div>
      </Drawer>
    </div>
  );
};

export default ChloeHeader;
