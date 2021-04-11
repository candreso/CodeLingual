import React, { useState } from "react";
import { useQuery } from "../../Functions/Functions";
import styled from "styled-components";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import AdminSignIn from "./AdminSignIn/AdminSignIn";
import "./Auth.css";
import { useLocation } from "react-router";

const Tab = styled.div`
  font-size: 1.7rem;
  background-color: ${({ selected }) => (selected ? "white" : "#e8ebed")};
  display: grid;
  place-items: center;
`;

const AdminTab = styled.div`
  font-size: 1.7rem;
  margin: 5px 0px 5px 0px;
  display: grid;
  place-items: center;
`;
const Auth = () => {
  const query = useQuery();
  const location = useLocation();

  const [selectedTab, setSelectedTab] = useState(
    query.get("type") || "sign-up"
  );

  const changeTab = (e) => {
    e.target.innerHTML == "Sign In"
      ? setSelectedTab("sign-in")
      : setSelectedTab("sign-up");
  };

  if (location.pathname.includes("admin")) {
    return (
      <div className="form-wrap">
        <div className="form">
          <AdminTab>Admin Sign In</AdminTab>
          <AdminSignIn />
        </div>
      </div>
    );
  }

  return (
    <div className="form-wrap">
      <div className="form">
        <div className="tabs" onClick={changeTab}>
          <Tab selected={selectedTab === "sign-up"}>Sign Up</Tab>
          <Tab selected={selectedTab === "sign-in"}>Sign In</Tab>
        </div>
        {selectedTab === "sign-up" ? <SignUp /> : <SignIn />}
      </div>
    </div>
  );
};

export default Auth;
