import React from "react";
import styled from "styled-components";
import colors from "styles/colors";

const LogoutButtonWrapper = styled.button`
  width: 150px;
  height: 50px;
  background-color: ${colors.first};
  position: fixed;
  bottom: 10px;
  right: 10px;
  font-family: "Titillium Web", sans-serif;
  border-radius: 10px;
  font-size: 20px;
  color: ${colors.fourth};
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
