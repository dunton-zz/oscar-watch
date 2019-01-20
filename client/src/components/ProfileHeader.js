import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const ProfileWrapper = styled.div`
  width: 100%;
  height: 80px;
  background: #1e1f26;
  color: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  position: relative;
  z-index: 10;
  flex-direction: row;
  font-family: "Titillium Web", sans-serif;

  .name {
    margin-right: 10px;
    margin-bottom: 0px;
  }
`;

const ButtonHolder = styled.div`
  justify-self: flex-end;

  button {
    margin-right: 10px;
  }
`;

const MovieMathHolder = styled.div`
  margin: 0 auto 0 10px;

  p {
    margin: 0 0 0 10px;
    padding: 0;
  }
`;

const ProfileHeader = props => {
  const renderContent = () => {
    const { isLoggedIn, userName } = props;
    switch (isLoggedIn) {
      case null:
        return;
      case false:
        return (
          <ButtonHolder>
            <Button bsStyle="primary">
              <a href="auth/google" style={{ color: "white" }}>
                Login With Google
              </a>
            </Button>
            <Button bsStyle="primary">
              <a href="auth/facebook" style={{ color: "white" }}>
                Login With Facebook
              </a>
            </Button>
          </ButtonHolder>
        );
      case true:
        return <p className="name">{userName}</p>;
      default:
        return;
    }
  };

  const content = renderContent(props);
  const movieMath = props.isLoggedIn
    ? +(Math.round((props.number / 60) * 100 + "e+2") + "e-2") + "%"
    : "No Progress";
  return (
    <ProfileWrapper>
      <MovieMathHolder>
        <p>{movieMath}</p>
      </MovieMathHolder>
      {content}
    </ProfileWrapper>
  );
};

export default ProfileHeader;
