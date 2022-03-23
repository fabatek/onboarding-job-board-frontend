import React from 'react';
import UnderHeader from './UnderHeader/under_header';

const Header:React.FC= () => {
    return (  
        <header className="p-3 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              <img src="https://itviec.com/assets/logo-itviec-4492a2f2577a15a0a1d55444c21c0fa55810822b3b189fc689b450fb62ce0b5b.png" alt="itviec-logo" width="108" height="42" />
            </a>
    
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="#" className="nav-link px-2 text-secondary">All Job</a></li>
              <li><a href="#" className="nav-link px-2 text-secondary">IT Companies</a></li>
              <li><a href="#" className="nav-link px-2 text-secondary">Blog</a></li>
          
            </ul>
    
            
    
            <div className="text-end">
              <button type="button" className="btn me-2 text-white">Sign in</button>
              <button type="button" className="btn text-white">Employers</button>
            </div>
          </div>
        </div>
        <UnderHeader/>
      </header>
    );
};

export default Header;