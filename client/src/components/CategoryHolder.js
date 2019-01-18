import React from "react";
import { Col } from "react-bootstrap";
import MovieCategory from "components/MovieCategory";

const CategoryHolder = props => {
  const { handleClick, categoryTitle } = props;
  return (
    <Col md={6} sm={12}>
      <MovieCategory categoryTitle={categoryTitle} handleClick={handleClick} />
    </Col>
  );
};

export default CategoryHolder;
