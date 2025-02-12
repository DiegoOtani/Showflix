import { useState } from "react";
import { HeaderStyled } from "./styles";
import InputField from "../InputField";
import { FaSearch } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

const Header = () => {
  const [ search, setSearch] = useState("");
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = () => {
    if(search !== "") {
      navigate(`/shows/${search}`)
      setSearch("");
    }
  };

  return (
    <HeaderStyled>
      <Link className="logo" to="/">SHOWFLIX</Link>
      <InputField 
        icon={FaSearch}
        onChange={handleChange}
        value={search}
        placeholder="Searching for..."
        onClick={handleSubmit}
      />
      <nav>
        <Link to="/">Tv Shows</Link>
        <Link to="/show/add">Add Show</Link>
        <a href="https://github.com/DiegoOtani/Showflix" target="blank">About</a>
      </nav>
    </HeaderStyled>
  )
}

export default Header;