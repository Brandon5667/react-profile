import React, { useState } from "react";
import About from './pages/about';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';
import NavTabs from "./navtabs";
import Footer from "./footer";

export default function ProfileContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
          return <About />;
        }
        if (currentPage === 'Contact') {
          return <Contact />;
        }
        if (currentPage === 'Portfolio') {
          return <Portfolio />;
        }
        return <Resume />;
      };

      const handlePageChange = (page) => setCurrentPage(page);

      return (
        <div>
          <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
          {renderPage()}
          <Footer />
        </div>
      );
};