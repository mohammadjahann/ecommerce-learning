import { Navigate, Outlet } from "react-router-dom";

type Props = {
  isAllowed: boolean;
};

const ProtectedRoute = ({ isAllowed }: Props) => {
  if (!isAllowed) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
