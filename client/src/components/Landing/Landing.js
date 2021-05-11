import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import TranslationsBox from "../TranslationsBox/TranslationsBox";
import * as S from "./Landing.styles";
import "./Landing.css";

const Landing = () => {
  const [showDescription, setShowDescription] = useState(true);
  const [formData, setFormData] = useState({ sl: "", dl: "", code: "" });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [translations, setTranslations] = useState(null);
  const history = useHistory();

  const changeFormData = (data) => {
    setFormData({ ...formData, ...data });
  };

  const translate = async () => {
    if (
      formData.code === "" ||
      formData.sl === "" ||
      formData.dl === "" ||
      formData.dl === formData.sl
    ) {
      setError(true);
    } else {
      setError(false);
      setIsLoading(true);
      setShowDescription(false);

      // const API_PORT = process.env.PORT || 8080;
      const HOST =
        process.env.CODELINGUAL_HOST ||
        "https://codelingual-v3.azurewebsites.net";
      const ENDPOINT = `translate?sl=${formData.sl}&dl=${formData.dl}&code=${formData.code}`;

      const results = await fetch(`${HOST}/api/v1/${ENDPOINT}`);
      const data = await results.json();

      if (data) {
        setTranslations(data);
      }

      history.push(ENDPOINT);
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="wrap">
      <S.TranslateWrap show={showDescription}>
        {showDescription && (
          <div>
            <h1 className="brand">CodeLingual</h1>
            <p className="text">
              Select your source and destination languages from the dropdown
              menus, and enter the function you would like to translate.
            </p>
          </div>
        )}
        {error && (
          <Alert severity="error">Please fill the form correctly!</Alert>
        )}
        <div className="input-wrap">
          <LanguageDropdown
            formData={formData}
            changeFormData={changeFormData}
            className="source"
          />
          <div className="icon center">
            <FontAwesomeIcon icon={faExchangeAlt} size="2x" />
          </div>
          <LanguageDropdown
            formData={formData}
            changeFormData={changeFormData}
            className="destination"
          />
          <input
            onChange={(e) => changeFormData({ code: e.target.value })}
            value={formData["code"]}
            className="input-code"
            placeholder="Enter Code"
            type="text"
          />

          <div className="submit">
            <Button
              onClick={translate}
              style={{ fontSize: "1.2rem" }}
              variant="contained"
              color="secondary"
              className="submit-button"
            >
              Submit
            </Button>
          </div>
        </div>
        {isLoading ? (
          <div className="spinner" />
        ) : (
          showDescription || (
            <TranslationsBox translations={translations} formData={formData} />
          )
        )}
      </S.TranslateWrap>
    </div>
  );
};

export default Landing;
