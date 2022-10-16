import { Navigate, useLocation, Outlet } from 'react-router';
import React from 'react';

const RequireAuth = () => {
  const isLogged = localStorage.getItem('USER_TOKEN') ? true : false;
  const location = useLocation();

  return isLogged ? (
    <Outlet />
  ) : (
    <Navigate state={{ from: location }} to="/auth" replace />
  );
};

export default RequireAuth;
