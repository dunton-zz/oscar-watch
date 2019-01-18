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
  display: block;
  div {
    display: inline;
  }
`;

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }
  handleClick = () => {
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
    const { addMovie, removeMovie } = this.props;
    if (this.state.checked) {
      console.log("added");
      addMovie(movieTitle);
    } else {
      console.log("removed");
      removeMovie(movieTitle);
    }
  };

  componentWillMount() {
    const { movies, movieTitle } = this.props;
    if (movies.indexOf(movieTitle) !== -1) {
      this.setState({ checked: true });
    }
  }

  render() {
    console.log(this.props);
    return (
      <MovieContent>
        <Checkbox checked={this.state.checked} onChange={this.handleClick} />
        {this.props.movieTitle}
      </MovieContent>
    );
  }
}

export default connect(
  null,
  actions
)(Movie);
