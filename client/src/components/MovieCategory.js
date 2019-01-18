import React from "react";
import styled from "styled-components";

const CategoryWrapper = styled.div`
  height: 300px;
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  background-color: #4d648d;
  margin: 20px 0px;
  border-radius: 10px;
  color: #ffffff;
  font-family: "Titillium Web", sans-serif;
`;

const MovieCategory = props => {
  const { categoryTitle, handleClick } = props;
  const passClick = () => {
    handleClick(categoryTitle);
  };
  return <CategoryWrapper onClick={passClick}>{categoryTitle}</CategoryWrapper>;
};

export default MovieCategory;
