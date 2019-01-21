import React from "react";
import styled from "styled-components";
import colors from "styles/colors";
import { keyframes } from "styled-components";

const slideIn = keyframes`
  0% { right: -50px }
  100% { right: 10px; }
`;

const LogoutButtonWrapper = styled.button`
  width: 150px;
  height: 50px;
  background-color: ${colors.fifth};
  position: fixed;
  bottom: 10px;
  right: -50px;
  font-family: "Titillium Web", sans-serif;
  border-radius: 10px;
  font-size: 20px;
  color: ${colors.fourth};
  border: 2px solid ${colors.fifth}


  :hover {
    background: ${colors.fifth};
    color: ${colors.fourth};
    border: 2px solid ${colors.fourth}
  }

  animation: ${slideIn} 0.5s linear forwards;
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
