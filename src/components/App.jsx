import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { refreshUser } from 'redux/auth/operations';
import { Contacts } from './Contacts/Contacts';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { LoginForm } from './LoginForm.js/LoginForm';
import Layout from './Layout/Layout';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    'User data is fetching'
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/login" replace={true} />} />
        <Route path="/contacts" element={<PrivateRoute component={<Contacts/>} redirectTo='/login'/>} />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={<LoginForm/>} redirectTo="/contacts" />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={<RegisterForm/>} redirectTo="/contacts" />
          }
        />
      </Route>
    </Routes>
  );
};
