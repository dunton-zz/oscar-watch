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
  flex-direction: column;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 26px;
  }
`;

const MovieCategory = props => {
  const { categoryTitle, handleClick, nomineeNumber, numberWatched } = props;
  const passClick = () => {
    handleClick(categoryTitle);
  };
  return (
    <CategoryWrapper onClick={passClick}>
      <h2>{categoryTitle}</h2>
      <p>
        {numberWatched}/{nomineeNumber}
      </p>
    </CategoryWrapper>
  );
};

export default MovieCategory;
