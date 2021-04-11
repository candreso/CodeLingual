import styled from "styled-components";
import "./Header.css";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Drawer, List } from "@material-ui/core";
import { HamburgerSpin } from "react-animated-burgers";
import { faChessKing } from "@fortawesome/free-solid-svg-icons";

const StyledSpin = styled(HamburgerSpin)`
  outline: none;
`;

const BrandLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const history = useHistory();

  const toggleMenu = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  // creating my own routing system bruh
  const redirect = (e) => {
    const link = e.target.innerHTML;
    if (
      link === "Sign Up" ||
      link === "Sign In" ||
      link === "About Us" ||
      link === "Submit Translations"
    ) {
      switch (link) {
        case "Sign Up":
          history.push("/auth?type=sign-up");
          break;
        case "Sign In":
          history.push("/auth?type=sign-in");
          break;
        case "About Us":
          history.push("/about-us");
          break;
        case "Submit Translations":
          history.push("/submit-translations");
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
        <div className="drawer-buttons" onClick={redirect}>
          <Button variant="contained" color="secondary">
            About Us
          </Button>
          <Button variant="contained" color="secondary">
            Sign In
          </Button>
          <Button variant="contained" color="secondary">
            Sign Up
          </Button>
          <Button variant="contained" color="secondary">
            Submit Translations
          </Button>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
