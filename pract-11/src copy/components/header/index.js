import { Outlet, useNavigate } from 'react-router-dom';
import './style.css';

const HeaderComponent = () => {
 const navigate = useNavigate();


 const logout = () => {
  localStorage.removeItem('userName');
  navigate('/');
 };

 return (
  <>
   <header>
    <div onClick={logout}>
     Logout
    </div>
   </header>
   <Outlet />
  </>
 );
};

export default HeaderComponent;