import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Checkbox } from "react-bootstrap";

const MovieContent = styled.div`
  border: 1px solid black;
  width: 100%;
  margin: 10px;
  background: white;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 10px;

  .checkbox {
    margin-top: 0;
    margin-bottom: 0;
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
    const { movies, movieTitle } = this.props;
    if (movies.indexOf(movieTitle) !== -1) {
      this.setState({ checked: true });
    }
  }

  render() {
    return (
      <MovieContent>
        <Checkbox checked={this.state.checked} onChange={this.handleClick} />
        <div>{this.props.movieTitle}</div>
      </MovieContent>
    );
  }
}

export default connect(
  null,
  actions
)(Movie);
