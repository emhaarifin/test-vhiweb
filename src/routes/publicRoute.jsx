import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
const publicRoute = () => {
  const token = localStorage.getItem('token');

  return token ? <Navigate to='users' /> : <Outlet />;
};

export default publicRoute;
