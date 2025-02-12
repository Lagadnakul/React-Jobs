import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/navbar.jsx';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default MainLayout;