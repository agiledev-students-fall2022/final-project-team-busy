import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import authService from "../services/authService";

const ProtectedRoute = ({
  user,
  setUser,
  redirectPath = "login",
  children,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const loggedUser = await authService.getMe();
        setUser(loggedUser);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    checkLogin();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};
export default ProtectedRoute;
