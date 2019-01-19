import React from "react";
import { Row, Col } from "react-bootstrap";
import ProfileHeader from "components/ProfileHeader";

const Header = props => {
  const { isLoggedIn, number, userName } = props;
  return (
    <Row>
      <Col md={12}>
        <ProfileHeader
          userName={userName}
          isLoggedIn={isLoggedIn}
          number={number}
        />
      </Col>
    </Row>
  );
};

export default Header;
