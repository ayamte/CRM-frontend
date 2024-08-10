import React from 'react';
import Header from './partials/Header.comp';
import Footer from './partials/Footer.comp';
import { Outlet } from 'react-router-dom'; // Importer Outlet

const DefaultLayout = () => {
  return (
    <div className="default-layout">

      <header className='header mb-2'>
         <Header />
      </header>

      <main className='main'>
         <Outlet />  {/* Rendre les routes enfants ici */}
      </main>

      <footer className="footer">
        <Footer />
      </footer>

    </div>
  );
}

export default DefaultLayout;
