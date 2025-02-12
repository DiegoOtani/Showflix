import { useState } from "react";
import InputField from "../../components/InputField/index";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import LoginService from "../../services/login";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { LoginPageStyled, FormStyled, SubmitButtonStyled, InputStyled } from "./styles";

const LoginPage = () => {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await LoginService.login(email, password);
    setEmail("");
    setPassword("");
    if(response.message) return console.log(response.message)

    localStorage.setItem("token", response.token);

    setUser(response.user);

    navigate('/');
  }

  return (
    <LoginPageStyled>
      <FormStyled onSubmit={handleSubmit}>
      <h1>SHOWFLIX</h1>
        <h2>Login</h2>
        <InputStyled>
          <label>Email</label>
          <InputField 
            icon={MdOutlineEmail}
            onChange={handleEmailChange}
            value={email}
            placeholder={"example@email.com"}
          />
        </InputStyled>
        <InputStyled>
          <label>Password</label>
          <InputField 
            icon={RiLockPasswordLine}
            onChange={handlePasswordChange}
            value={password}
            placeholder={"password"}
            />
          </InputStyled>
        <SubmitButtonStyled type="submit">
          Login
        </SubmitButtonStyled>
      </FormStyled>
    </LoginPageStyled>
  )
}

export default LoginPage