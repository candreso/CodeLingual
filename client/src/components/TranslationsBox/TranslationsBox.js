/* eslint-disable react/prop-types */
import React from "react";
import "./TranslationsBox.css";
import {
  faTimes,
  faExclamationCircle,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import Modal from "../../UI/Modal/Modal";

const fakeData = [
  "System.out.println('123')",
  "x.toString().toHash()",
  "export default colorPicker",
  "import lodash from {lodash}",
];

const TranslationsBox = ({ formData }) => {
  const [reportModal, openReportModal] = useState(false);
  const [updatedTranslation, setUpdatedTranslation] = useState("");
  const [error, setError] = useState(false);
  // const [submitSucces, setSubmitSuccess] = useState(null);

  const toggleModal = () => {
    openReportModal(!reportModal);
  };

  const updateTranslation = () => {
    if (updatedTranslation === "") {
      setError(true);
    } else {
      setError(false);

      // fetch("localhost:5000/api/v1/update-translation");
    }
  };

  return (
    <div className="translations-wrap">
      {fakeData.map((data, index) => {
        return (
          <div key={index} className="translation">
            <code>{data}</code>
            <div className="icon-wrap">
              <FontAwesomeIcon
                onClick={toggleModal}
                icon={faExclamationCircle}
                color="red"
                size="2x"
              />
            </div>
            {reportModal && (
              <Modal onClose={toggleModal} showModal={reportModal}>
                <FontAwesomeIcon
                  className="cancel-icon"
                  icon={faTimes}
                  onClick={toggleModal}
                  color={"#dc004e"}
                  size="2x"
                />
                <div className="report-wrap">
                  {error && (
                    <Alert
                      style={{ width: "100%", boxSizing: "border-box" }}
                      severity="error"
                    >
                      Please fill the form correctly!
                    </Alert>
                  )}
                  <div className="report-translation">
                    <b>{formData.sl}</b>

                    <FontAwesomeIcon
                      icon={faArrowRight}
                      color={"#dc004e"}
                      size="1x"
                    />

                    <b>{formData.dl}</b>
                  </div>
                  <code className="report-code">{formData.code}</code>{" "}
                  <div className="report-text">
                    is inaccurate, and it should be...
                  </div>
                  <input
                    className="report-code-input"
                    placeholder="Enter Code"
                    type="text"
                    onChange={(e) => setUpdatedTranslation(e.target.value)}
                    value={updatedTranslation}
                  />
                  <Button
                    style={{ fontSize: "1.2rem" }}
                    variant="contained"
                    color="secondary"
                    className="report-submit"
                    onClick={updateTranslation}
                  >
                    Submit
                  </Button>
                </div>
              </Modal>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TranslationsBox;
