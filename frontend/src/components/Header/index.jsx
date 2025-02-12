import { useState } from "react";
import { HeaderStyled } from "./styles";
import InputField from "../InputField";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const [ search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = () => {
    console.log("Pesquisado");
  };

  return (
    <HeaderStyled>
      <a className="logo" href="/">SHOWFLIX</a>
      <InputField 
        icon={FaSearch}
        onChange={handleChange}
        value={search}
        placeholder="Searching for..."
        onClick={handleSubmit}
      />
      <nav>
        <a href="/">Tv Shows</a>
        <a href="#" target="blank">Add Show</a>
        <a href="#" target="blank">About</a>
      </nav>
    </HeaderStyled>
  )
}

export default Header;