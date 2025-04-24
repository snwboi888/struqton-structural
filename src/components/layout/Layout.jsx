import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import '../../styles/Layout.css';

const Layout = () => {
  return (
    <div className="app-container">
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 