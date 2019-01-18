import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const ProfileWrapper = styled.div`
  width: 100%;
  height: 80px;
  background: purple;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  position: relative;
  z-index: 10;

  p {
    span {
      margin-left: 10px;
    }
  }
`;

class ProfileHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false
    };
  }

  render() {
    console.log(this.props);
    const movieMath = +(
      Math.round((this.props.number / 60) * 100 + "e+2") + "e-2"
    );

    return (
      <ProfileWrapper>
        <p>
          {this.props.userName}
          <span>{movieMath}%</span>
        </p>
      </ProfileWrapper>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(ProfileHeader);
