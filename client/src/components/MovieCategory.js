import React from "react";
import styled from "styled-components";

const CategoryWrapper = styled.div`
  height: 400px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  background-color: aqua;
  margin: 20px 0;
`;

const MovieCategory = props => {
  const { categoryTitle, handleClick } = props;
  const passClick = () => {
    handleClick(categoryTitle);
  };
  return <CategoryWrapper onClick={passClick}>{categoryTitle}</CategoryWrapper>;
};

export default MovieCategory;
