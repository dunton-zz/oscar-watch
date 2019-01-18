import React, { Component } from "react";
import { Grid, Row } from "react-bootstrap";
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
      activeCategory: null,
      isLoggedIn: true
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
  componentDidMount() {
    //this.props.fetchUser();
    console.log(this.props);
  }

  render() {
    const { modal, activeCategory } = this.state;

    const categories = modal ? <div /> : this.displayCategories();

    return (
      <Router>
        <div>
          <Grid fluid style={{ backgroundColor: "#d0e1f9" }}>
            <Header isLoggedIn={this.state.isLoggedIn} />
            <Row>{categories}</Row>
            <Row>
              <MovieModal
                isActive={modal}
                activeCategory={activeCategory}
                closeModal={this.closeModal}
                movies={this.props.movies}
                data={data}
              />
            </Row>
          </Grid>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    movies: state.movies
  };
}

export default connect(
  mapStateToProps,
  actions
)(App);
