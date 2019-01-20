import React, { Component } from "react";
import { Grid, Row } from "react-bootstrap";
import CategoryHolder from "components/CategoryHolder";
import LogoutButton from "components/LogoutButton";
import MovieModal from "components/MovieModal";
import Header from "components/Header";
import data from "data/";
import filmsWatched from "functions/filmsWatched";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      activeCategory: null,
      isLoggedIn: false,
      movies: [],
      number: 0,
      userName: null
    };

    this.saveMovieData = this.saveMovieData.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
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
      const numberWatched = filmsWatched(
        dataCategory.category,
        this.state.movies
      );
      return (
        <CategoryHolder
          handleClick={this.handleClick}
          categoryTitle={dataCategory.category}
          key={i}
          nomineeNumber={dataCategory.nominees.length}
          numberWatched={numberWatched}
        />
      );
    });
  };

  saveMovieData = async function() {
    const { movies } = this.state;
    //send api request
    axios
      .post("api/save", movies)
      .then(res => {
        return res;
      })
      .catch(error => console.log(error));

    return;
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

  fetchUser = async function() {
    const res = await axios.get("api/current_user");
    console.log(res.data);
    let userName, movies, number, isLoggedIn;
    if (res.data.movies !== undefined) {
      userName = res.data.name;
      movies = res.data.movies;
      number = movies.length;
      isLoggedIn = true;
      console.log("if");
    } else {
      userName = "";
      movies = [];
      number = 0;
      isLoggedIn = false;
      console.log("else");
    }

    this.setState({
      userName,
      isLoggedIn,
      movies,
      number
    });
    return;
  };

  async componentWillMount() {
    this.fetchUser();
  }

  handleLogout = async function() {
    await axios.get("api/logout");
    this.fetchUser();
  };

  render() {
    const {
      modal,
      activeCategory,
      number,
      movies,
      userName,
      isLoggedIn
    } = this.state;

    const categories = modal ? <div /> : this.displayCategories();
    return (
      <div>
        <Header isLoggedIn={isLoggedIn} number={number} userName={userName} />
        <Grid fluid style={{ backgroundColor: "#d0e1f9", marginTop: 80 }}>
          <Row>{categories}</Row>
          <LogoutButton
            isLoggedIn={isLoggedIn}
            handleLogout={this.handleLogout}
          />
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
