import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import DefaultLayout from '../../layout/DefaultLayout';
import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess } from '../login/loginSlice';
import { fetchNewAccessJWT } from '../../api/userApi';
import { getUserProfile } from "../../page/dashboard/userAction";



const PrivateRoute = () => {

  const dispatch = useDispatch();
  const {isAuth} = useSelector((state)=> state.login );
  const {user} = useSelector((state)=> state.user );


  useEffect(() => {
		const updateAccessJWT = async () => {
			const result = await fetchNewAccessJWT();
			result && dispatch(loginSuccess());
		};

		!user._id && dispatch(getUserProfile());

		!sessionStorage.getItem("accessJWT") && localStorage.getItem("crmSite") && updateAccessJWT();

		!isAuth && sessionStorage.getItem("accessJWT") && dispatch(loginSuccess());
	}, [dispatch, isAuth, user._id]);

  return isAuth ? (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoute;
