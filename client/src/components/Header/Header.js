import React, { useState } from "react";
import styled from "styled-components";
import "./Header.css";
import { Button, Drawer, List } from "@material-ui/core";
import { HamburgerSpin } from "react-animated-burgers";

const StyledSpin = styled(HamburgerSpin)`
  outline: none;
`;

const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleMenu = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <div className="header-wrap">
      <h2 className="header-brand">CodeLingual</h2>
      <div className="empty-div"></div>
      <StyledSpin onClick={toggleMenu} isActive={hamburgerOpen} />
      <Drawer anchor="left" open={hamburgerOpen} onClose={toggleMenu}>
        <div className="drawer-buttons">
          <Button variant="contained" color="secondary">
            About Us
          </Button>
          <Button variant="contained" color="secondary">
            Log In
          </Button>
          <Button variant="contained" color="secondary">
            Sign Up
          </Button>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
