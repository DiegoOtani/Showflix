import React from "react"
import { CardStyled } from "./styles"
import MovieInfo from "../ShowInfo"

const Card = ({ imgUrl, title, language, rating, onClick, id, selected }) => {
  const handleClick = () => {
    if( onClick) onClick(id);
  }
  
  return <CardStyled 
    onClick={handleClick}
    selected={selected}
  >
    <img src={imgUrl} alt={title} />
    <div>
      <h2>{title}</h2>
      <MovieInfo language={language} rating={rating}/>
    </div>
  </CardStyled>
}

export default Card