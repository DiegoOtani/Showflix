import React from 'react'
import { MovieInfoTypes } from "./types";
import { MovieInfoStyled } from "./styles";
import { FaStar } from "react-icons/fa";

const MovieInfo = ({ rating, language }: MovieInfoTypes) => {
  return <MovieInfoStyled>
    <span className="rating">
      <FaStar />
      {rating}
    </span>
    <span>
      {language} 
    </span>
  </MovieInfoStyled>
};

export default MovieInfo;