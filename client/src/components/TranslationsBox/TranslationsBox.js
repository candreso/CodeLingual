import "./TranslationsBox.css";
import {
  faTimes,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Modal from "../../UI/Modal/Modal";
import styled from "styled-components";

const fakeData = [
  "System.out.println('123')",
  "x.toString().toHash()",
  "export default colorPicker",
  "import lodash from {lodash}",
];

const TranslationsBox = () => {
  const [reportModal, openReportModal] = useState(false);

  const toggleModal = () => {
    openReportModal(!reportModal);
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
                <div>123</div>
                <div>123</div> <div>123</div> <div>123</div>
                <div>123</div> <div>123</div>
              </Modal>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TranslationsBox;
