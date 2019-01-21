import React from "react";
import styled from "styled-components";

const LogoutButtonWrapper = styled.button`
  width: 150px;
  height: 50px;
  background-color: #283655;
  position: fixed;
  bottom: 10px;
  right: 10px;
  font-family: "Titillium Web", sans-serif;
  border-radius: 10px;
  font-size: 20px;
  color: white;
`;

const LogoutButton = props => {
  const handleClick = () => {
    props.handleLogout();
  };
  const renderContent = () => {
    if (props.isLoggedIn && !props.modalActive) {
      return (
        <LogoutButtonWrapper onClick={handleClick}>LOGOUT</LogoutButtonWrapper>
      );
    } else {
      return <div />;
    }
  };
  return renderContent();
};

export default LogoutButton;
