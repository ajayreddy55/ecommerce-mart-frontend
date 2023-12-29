import { Navigate, Outlet } from "react-router-dom";
import { useUserAuth } from "./context/authContext";

const ProtectedRoute = () => {
  const { isLoggedIn } = useUserAuth();

  if (!isLoggedIn) {
    return <Navigate to={"/login"} replace={true} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
