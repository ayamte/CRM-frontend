import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import DefaultLayout from '../../layout/DefaultLayout';

const isAuth = true; 

const PrivateRoute = () => {
  return isAuth ? (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoute;
