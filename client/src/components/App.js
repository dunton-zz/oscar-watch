import React, { Component } from "react";
import { Grid, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import CategoryHolder from "components/CategoryHolder";
import MovieModal from "components/MovieModal";
import Header from "components/Header";
import data from "data/";
import * as actions from "../actions";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      activeCategory: null,
      isLoggedIn: true,
      movies: [],
      number: 0
    };
  }
  handleClick = categoryTitle => {
    this.setState({
      modal: true,
      activeCategory: categoryTitle
    });
  };

  closeModal = e => {
    e.stopPropagation();

    this.setState({
      modal: false
    });
  };

  displayCategories = () => {
    return data.map((dataCategory, i) => {
      return (
        <CategoryHolder
          handleClick={this.handleClick}
          categoryTitle={dataCategory.category}
          key={i}
        />
      );
    });
  };

  saveMovieData = () => {
    //send api request
    console.log("SAVING DATA");
  };

  addMovie = movieTitle => {
    const addedMovieArray = this.state.movies;
    addedMovieArray.push(movieTitle);
    const number = addedMovieArray.length;

    this.setState({
      movies: addedMovieArray,
      number
    });
  };

  removeMovie = movieTitle => {
    const removedMovieArray = this.state.movies;
    for (let i = 0; i < removedMovieArray.length; i++) {
      if (
        removedMovieArray[i].activeCategory === movieTitle.activeCategory &&
        removedMovieArray[i].movieTitle === movieTitle.movieTitle
      ) {
        removedMovieArray.splice(i, 1);
      }
    }
    const number = removedMovieArray.length;

    this.setState({
      movies: removedMovieArray,
      number
    });
  };

  countMovies = () => {
    const number = this.props.movies.length;
    this.setState({
      number
    });
  };

  async componentWillMount() {
    const res = await axios.get("/api/current_user");
    const userId = res.data.googleId;
    console.log(userId);
    return;
  }

  render() {
    const { modal, activeCategory, number, movies } = this.state;

    const categories = modal ? <div /> : this.displayCategories();

    return (
      <div>
        <Grid fluid style={{ backgroundColor: "#d0e1f9" }}>
          <Header isLoggedIn={this.state.isLoggedIn} number={number} />
          <Row>{categories}</Row>
          <Row>
            <MovieModal
              isActive={modal}
              activeCategory={activeCategory}
              closeModal={this.closeModal}
              movies={movies}
              data={data}
              countMovies={this.countMovies}
              addMovie={this.addMovie}
              removeMovie={this.removeMovie}
              saveMovieData={this.saveMovieData}
            />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
