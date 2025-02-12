import { useState } from "react";
import InputField from "../../components/InputField/index";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import LoginService from "../../services/login";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
  }

  return (
    <section>
      <h1>SHOWFLIX</h1>
      <form onSubmit={handleSubmit}>
        <InputField 
          icon={MdOutlineEmail}
          onChange={handleEmailChange}
          value={email}
          placeholder={"example@email.com"}
        />
        <InputField 
          icon={RiLockPasswordLine}
          onChange={handlePasswordChange}
          value={password}
          placeholder={"password"}
        />
        <button type="submit">
          Login
        </button>
      </form>
    </section>
  )
}

export default LoginPage