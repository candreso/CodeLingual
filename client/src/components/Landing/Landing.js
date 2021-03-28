import React, { useState } from "react";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@material-ui/core";
import "./Landing.css";

const Landing = () => {
  //I recommend reading https://reactjs.org/docs/conditional-rendering.html
  // and https://reactjs.org/docs/hooks-state.html
  // The submit button needs an event listener that sets a state
  // and on the next "lifecycle render" depending on that state
  // we can decide whether we want to render jsx
  // I am here if you need any help at all.

  const [state , negState] = useState(true);
  if(state){
    return (
      <div className="wrap">
        <div className="translate-wrap">
          {/* The h1 and the p below should be rendered only if a "state" is true*/}
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
                onClick={() => negState(!state)}
                style={{ fontSize: "1.2rem" }}
                variant="contained"
                color="secondary"
                className="submit-button"
              >
                Submit
              </Button>
            </div>
          </div>

          {/* 
        This div with the className "output" will be dynamically 
        be shown depending on a "state". After it is displaying on the 
        screen you can render more divs in it with fake data.
      */}

          {/* <div className="output"></div> */}
        </div>
      </div>
    );
  }
  return(
    <div className="wrap">
    <div className="translate-wrap">
      {/* The h1 and the p below should be rendered only if a "state" is true*/}
      {/* <h1 className="brand">CodeLingual</h1>
      <p className="text">
        Select your source and destination languages from the dropdown menus,
        and enter the function you would like to translate.
      </p> */}
      <div className="input-wrap">
        <LanguageDropdown className="source" />
        <div className="icon" className="center">
          <FontAwesomeIcon icon={faExchangeAlt} size="2x" />
        </div>
        <LanguageDropdown className="destination" />
        <input className="input-code" placeholder="Enter Code" type="text" />
        <div className="submit">
          <Button
            onClick={() => negState(!state)}//Amir
            style={{ fontSize: "1.2rem" }}
            variant="contained"
            color="secondary"
            className="submit-button"
          >
            Submit
          </Button>
        </div>
      </div>

      {/* 
    This div with the className "output" will be dynamically 
    be shown depending on a "state". After it is displaying on the 
    screen you can render more divs in it with fake data.
  */}

      {/* <div className="output"></div> */}
    </div>
  </div>    
  );
};

export default Landing;
