import { Link, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { LayoutWrapper } from './Layout.styled';


const Layout = () => {
  const token = useSelector(state => state.auth.token);
  const mail = useSelector(state => state.auth.user.email);
  const dispatch = useDispatch();
  return (
    <LayoutWrapper>
      {token ? (
        <div>
          <Link to="/contacts">Contacts</Link>
          <div>
            <p>{mail}</p>
            <button onClick={() => dispatch(logOut())}>Logout</button>
          </div>
        </div>
      ) : (
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>        
      )}
      <Outlet />
    </LayoutWrapper>
  );
};

export default Layout;
