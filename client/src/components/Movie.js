import React, { Component } from "react";
import styled from "styled-components";
// import { connect } from "react-redux";
// import * as actions from "../actions";
// import { Checkbox } from "react-bootstrap";
import Checkbox from "@material-ui/core/Checkbox";
import colors from "styles/colors";

const MovieContent = styled.div`
  border: 1px solid black;
  width: 100%;
  margin: 10px;
  background: ${colors.fourth};
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  font-family: "Titillium Web", sans-serif;

  .checkbox {
    margin-top: 0;
    margin-bottom: 0;
  }

  @media (max-width: 700px) {
    padding: 5px;
  }
`;

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }
  handleClick = e => {
    e.stopPropagation();
    const { movieTitle } = this.props;
    this.setState(
      prevState => ({
        checked: !prevState.checked
      }),
      () => {
        this.changeMovieStatus(movieTitle);
      }
    );
  };

  changeMovieStatus = movieTitle => {
    const { addMovie, removeMovie, activeCategory } = this.props;
    const movieData = { activeCategory, movieTitle };
    if (this.state.checked) {
      addMovie(movieData);
    } else {
      removeMovie(movieData);
    }
  };

  componentWillMount() {
    const { movies, movieTitle, activeCategory } = this.props;
    for (let i = 0; i < movies.length; i++) {
      if (
        movies[i].activeCategory === activeCategory &&
        movies[i].movieTitle === movieTitle
      ) {
        this.setState({ checked: true });
      }
    }
  }

  render() {
    return (
      <MovieContent onClick={this.handleClick}>
        <Checkbox
          checked={this.state.checked}
          classes={{ colorPrimary: `${colors.second}` }}
          color="primary"
        />
        <div>{this.props.movieTitle}</div>
      </MovieContent>
    );
  }
}

export default Movie;
