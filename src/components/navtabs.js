import React, { useState, useEffect } from 'react';

// TODO: Add a comment explaining how we are able to extract the key value pairs from props

function NavTabs({ currentPage, handlePageChange }) {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1000);
    const updateMedia = () => {
        setDesktop(window.innerWidth > 1450);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });
    
   const [menuVisible, setMenuVisible] = useState(false);

   let isDropdownActive = menuVisible ? "is-active" : "is-inactive";
      
    return (
        <nav className="navbar" style={{ backgroundColor: "#9fedcb" }} role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://github.com/Brandon5667">
                    <h1>Brandon Cullifer</h1>
                </a>
                {isDesktop ? (
                <div id="navbarBasicExample" class="navbar-menu">
                    <div className="navbar-start">
                        <a
                            href="#about"
                            onClick={() => handlePageChange('About')}
                            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                        >
                            About
                        </a>
                        <a
                            href="#contact"
                            onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                        >
                            Contact
                        </a>
                        <a
                            href="#portfolio"
                            onClick={() => handlePageChange('Portfolio')}
                            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                        >
                            Portfolio
                        </a>
                        <a
                            href="#resume"
                            onClick={() => handlePageChange('Resume')}
                            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                        >
                            Resume
                        </a>
                    </div>
                </div>) : (
                    <div className={"dropdown "+isDropdownActive}>
                    <div className="dropdown-trigger">
                      <button className="button" onClick={()=> setMenuVisible(!menuVisible)} aria-haspopup="true" aria-controls="dropdown-menu">
                        <span>Dropdown button</span>
                        <span className="icon is-small">
                          <i className="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                      </button>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                      <div className="dropdown-content">
                        <a href="#about" onClick={() => {handlePageChange('About'); setMenuVisible(!menuVisible);}}
                            className={currentPage === 'About' ? 'dropdown-item is-active' : 'dropdown-item'}>
                          About
                        </a>                        
                        <a href='#contact' onClick={() => {handlePageChange('Contact'); setMenuVisible(!menuVisible);}}
                            className={currentPage === 'Contact' ? 'dropdown-item is-active' : 'dropdown-item'}>
                          Contact
                        </a>                        
                        <a href="#portfolio" onClick={() => {handlePageChange('Portfolio'); setMenuVisible(!menuVisible)}}
                            className={currentPage === 'Portfolio' ? 'dropdown-item is-active' : 'dropdown-item'}>
                          Portfolio
                        </a>
                        <a href="#resume" onClick={() => {handlePageChange('Resume'); setMenuVisible(!menuVisible)}}
                            className={currentPage === 'Resume' ? 'dropdown-item is-active' : 'dropdown-item'}>
                          Resume
                        </a>
                      </div>
                    </div>
                  </div>
                
                
                )}
            </div>
        </nav>);
}

export default NavTabs;
