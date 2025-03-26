import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AuthRedirect = ({ children }) => {
  const { authenticated, loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && authenticated) {
      navigate("/");
    }
  }, [authenticated, loading, navigate]);

  if (loading) {
    return <div>Loading...</div>; 
  }

  return !authenticated ? children : null;
};

export default AuthRedirect;
