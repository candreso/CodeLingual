import styled from "styled-components";

export const TranslateWrap = styled.div`
  width: 95%;
  max-width: 800px;
  margin: ${({ show }) => (show ? "150px" : "100px")} auto 0px auto;
  text-align: center;
  @media (max-width: 600px) {
    margin: 80px auto 0px auto;
  }
`;
