import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import CategoryHolder from "components/CategoryHolder";
import MovieModal from "components/MovieModal";
import Header from "components/Header";
import data from "data/";
import * as actions from "../actions";

class App extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      activeCategory: null
    };
  }
  handleClick = categoryTitle => {
    this.setState({
      modal: true,
      activeCategory: categoryTitle
    });
  };
  closeModal = () => {
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
  componentDidMount() {
    console.log(this.props);
    this.props.fetchUser();
  }
  render() {
    const { modal, activeCategory } = this.state;
    //const watchedMovies = this.props.movies.length;
    const categories = modal ? <div /> : this.displayCategories();

    return (
      <Router>
        <div>
          <Grid fluid>
            <Header />
            {categories}
            <MovieModal
              isActive={modal}
              activeCategory={activeCategory}
              closeModal={this.closeModal}
              movies={this.props.movies}
              data={data}
            />
          </Grid>
        </div>
      </Router>
    );
  }
}

export default connect(
  null,
  actions
)(App);
