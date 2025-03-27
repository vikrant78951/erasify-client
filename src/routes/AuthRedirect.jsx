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
    return (
      <div className="block h-10 w-10 mx-auto mt-4  animate-spin rounded-full border border-cyan-500 text-center text-white border-l-0 border-r-0 ">
      </div>
    ); 
  }

  return !authenticated ? children : null;
};

export default AuthRedirect;
