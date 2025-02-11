import { HeaderStyled } from "./styles";

const Header = () => {
  return (
    <HeaderStyled>
      <a className="logo" href="/" target="blank">SHOWFLIX</a>
    <nav>
      <a href="/">Tv Shows</a>
      <a href="#" target="blank">Add Show</a>
      <a href="#" target="blank">About</a>
    </nav>
    </HeaderStyled>
  )
}

export default Header;