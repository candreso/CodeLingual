import "./TranslationsBox.css";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
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

const IconWrap = styled.div`
  justify-self: end;
  padding-right: 5px;
  cursor: pointer;
`;

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
            <IconWrap>
              <FontAwesomeIcon
                onClick={toggleModal}
                icon={faExclamation}
                color="red"
                size="2x"
              />
            </IconWrap>
            {reportModal && (
              <Modal onClose={toggleModal} showModal={reportModal}>
                123
              </Modal>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TranslationsBox;
