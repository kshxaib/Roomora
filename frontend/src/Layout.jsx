import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header always on top */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow pt-16"> {/* pt-16 to avoid overlap with fixed header */}
        <Outlet />
      </main>

      {/* Footer at bottom */}
      <Footer />
    </div>
  );
}

export default Layout;
