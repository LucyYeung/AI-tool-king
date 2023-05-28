import { Outlet } from 'react-router-dom';
import { Header } from './components/header';
import Footer from './components/footer';

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
