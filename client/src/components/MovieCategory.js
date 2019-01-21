import React from "react";
import styled from "styled-components";
import colors from "styles/colors";

const CategoryWrapper = styled.div`
  height: 300px;
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  background-color: ${colors.first};
  margin: 20px 0px;
  border-radius: 10px;
  color: ${colors.fourth};
  font-family: "Titillium Web", sans-serif;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    background: ${colors.fifth};
  }

  &:focus {
    background: ${colors.fifth};
  }

  h2 {
    font-size: 32px;
    text-align: center;
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
