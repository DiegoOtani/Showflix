import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../contexts/UserContext";

const AuthWrapper = ({ children }) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate(); 
  
  useEffect(() => {
    const token = localStorage.getItem("token");

    if(!token || Object.keys(user).length === 0) navigate("/login");
  }, [user, navigate])

  return <>
    {children}
  </>
}

export default AuthWrapper;