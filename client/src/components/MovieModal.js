import React, { Component } from "react";
import Movie from "components/Movie";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../actions";

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: #cccccc;
  top: 0;
  display: flex;
  justify-content: center;
  z-index: 0;
`;

const Modal = styled.div`
  width: 70%;
  height: 80%;
  position: absolute;
  background: red;
  top: 10%;
`;

const CategoryContent = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  margin-top: 10px;
`;

const CloseButton = styled.div`
  color: blue;
  justify-self: flex-end;
  top: 0;
  right: 0;
  position: absolute;
  font-size: 20px;
`;

const MovieWrapper = styled.div`
  display: flex;
  justify-content: center;

  > div {
    width: 80%;
  }
`;

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const ButtonHolder = styled.div`
  align-self: center;
  margin-top: 20px;
`;

class MovieModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieTitles: []
    };
  }
  addMovieData = () => {
    const { data, isActive, activeCategory, movies } = this.props;
    if (isActive) {
      return data.map((dataCategory, i) => {
        if (dataCategory.category === activeCategory) {
          const nominees = dataCategory.nominees;
          return nominees.map((nominee, i) => {
            return (
              <Movie
                movieTitle={nominee}
                key={i}
                movies={movies}
                activeCategory={activeCategory}
              />
            );
          });
        }
      });
    }
  };

  saveMovieData = () => {
    const { saveMovies, movies } = this.props;
    saveMovies(movies);
  };
  render() {
    const { isActive, activeCategory, closeModal } = this.props;
    if (isActive) {
      return (
        <ModalWrapper onClick={e => closeModal(e)}>
          <Modal>
            <CategoryWrapper onClick={e => e.stopPropagation()}>
              <CategoryContent>
                <div>
                  <h2>{activeCategory}</h2>
                </div>
              </CategoryContent>
              <CloseButton onClick={e => closeModal(e)}>x</CloseButton>
              <MovieWrapper>
                <div>{this.addMovieData()}</div>
              </MovieWrapper>
              <ButtonHolder>
                <Button onClick={this.saveMovieData}>SAVE PROGRESS</Button>
              </ButtonHolder>
            </CategoryWrapper>
          </Modal>
        </ModalWrapper>
      );
    }
    return <div />;
  }
}

export default connect(
  null,
  actions
)(MovieModal);
