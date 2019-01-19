import React from "react";
import { Row, Col } from "react-bootstrap";
import ProfileHeader from "components/ProfileHeader";

const Header = props => {
  const { isLoggedIn, number } = props;
  return (
    <Row>
      <Col md={12}>
        <ProfileHeader
          userName="Ryan"
          isLoggedIn={isLoggedIn}
          number={number}
        />
      </Col>
    </Row>
  );
};

export default Header;
