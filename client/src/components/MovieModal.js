import React, { Component } from "react";
import Movie from "components/Movie";
import styled from "styled-components";

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: grey;
  top: 0;
  display: flex;
  justify-content: center;
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
            return <Movie movieTitle={nominee} key={i} movies={movies} />;
          });
        }
      });
    }
  };
  render() {
    const { isActive, activeCategory, closeModal } = this.props;
    if (isActive) {
      return (
        <ModalWrapper>
          <Modal>
            <CategoryContent>
              <div>{activeCategory}</div>
            </CategoryContent>
            <CloseButton onClick={closeModal}>x</CloseButton>
            <MovieWrapper>
              <div>{this.addMovieData()}</div>
            </MovieWrapper>
          </Modal>
        </ModalWrapper>
      );
    }
    return <div />;
  }
}

export default MovieModal;
