import React from "react";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@material-ui/core";
import "./Translate.css";

const Translate = () => {
  return (
    <div className="translate-wrap">
      <h1 className="brand">CodeLingual</h1>
      <p className="text">
        Select your source and destination languages from the dropdown menus,
        and enter the function you would like to translate.
      </p>
      <div className="input-wrap">
        <LanguageDropdown className="source" />
        <div className="icon" className="center">
          <FontAwesomeIcon icon={faExchangeAlt} size="2x" />
        </div>
        <LanguageDropdown className="destination" />
        <input className="input-code" placeholder="Enter Code" type="text" />
        <div className="submit">
          <Button
            style={{ fontSize: "1.2rem" }}
            variant="contained"
            color="secondary"
            className="submit-button"
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Translate;
