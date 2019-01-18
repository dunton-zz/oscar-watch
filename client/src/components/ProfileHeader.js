import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";

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

class ProfileHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: null
    };
  }

  renderContent = () => {
    switch (this.props.isLoggedIn) {
      case null:
        return;
      case false:
        return (
          <ButtonHolder>
            <Button bsStyle="primary">
              <a href="/auth/google" style={{ color: "white" }}>
                Login With Google
              </a>
            </Button>
            <Button bsStyle="primary">
              <a href="/auth/facebook" style={{ color: "white" }}>
                Login With Facebook
              </a>
            </Button>
          </ButtonHolder>
        );
      case true:
        return <p className="name">{this.props.userName}</p>;
      default:
        return;
    }
  };

  render() {
    console.log(this.props);
    const content = this.renderContent(this.props);
    const movieMath = this.props.isLoggedIn
      ? +(Math.round((this.props.movies.length / 60) * 100 + "e+2") + "e-2") +
        "%"
      : "No Progress";
    return (
      <ProfileWrapper>
        <MovieMathHolder>
          <p>{movieMath}</p>
        </MovieMathHolder>
        {content}
      </ProfileWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

export default connect(mapStateToProps)(ProfileHeader);
